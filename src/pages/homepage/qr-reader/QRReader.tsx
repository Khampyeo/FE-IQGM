import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import { useNavigate } from "zmp-ui";
import Toolbar from "@/components/toolbar/Toolbar";
import ImageIcon from "@/static/icons/icon_image__add.svg";
import QrFrame from "@/static/images/qr-frame.svg";

const QrReader = () => {
  const navigate = useNavigate();
  const scanner = useRef<QrScanner | null>(null);
  const videoEl = useRef<HTMLVideoElement>(null);
  const qrBoxEl = useRef<HTMLDivElement>(null);
  const [qrOn, setQrOn] = useState<boolean>(true);

  const onScanSuccess = (result: QrScanner.ScanResult) => {
    navigate("/payment", { animate: true, direction: "forward" });
  };

  const onScanFail = (err: string | Error) => {
    console.log(err);
  };

  const handleImageSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const result = await QrScanner.scanImage(file, {
          returnDetailedScanResult: true,
        });
        if (result) {
          navigate("/payment", { animate: true, direction: "forward" });
        } else {
          alert("No QR code found in the image.");
        }
      } catch (err) {
        console.error("Failed to scan image", err);
        alert("Failed to scan image. Please try another image.");
      }
    }
  };
  useEffect(() => {
    if (videoEl.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl.current || undefined,
      });

      // Start QR Scanner
      scanner.current
        .start()
        .then(() => setQrOn(true))
        .catch((err) => {
          console.error(err);
          setQrOn(false);
        });
    }

    return () => {
      if (scanner.current) {
        scanner.current.stop();
        scanner.current.destroy();
        scanner.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn) {
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and reload the page."
      );
    }
  }, [qrOn]);

  return (
    <div className="w-full h-dvh relative">
      <div className="absolute z-10 top-0 w-full text-white">
        <Toolbar name="Scan QR" pre="/" positionName="center" border={false} />
      </div>
      <video ref={videoEl} className="w-full !h-full object-cover"></video>
      <div ref={qrBoxEl} className="w-full left-0">
        <QrFrame className="absolute fill-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute left-4 bottom-10 z-10 flex flex-col justify-center items-center cursor-pointer transition-all">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
          id="image-input"
        />
        <label htmlFor="image-input" className="flex flex-col items-center">
          <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
            <ImageIcon />
          </div>
          <p className="text-white text-sm">Select image</p>
        </label>
      </div>
    </div>
  );
};

export default QrReader;
