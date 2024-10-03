import React, { useRef, useState } from "react";
import { Box, Flex, Progress } from "@mantine/core";
import DragIcon from "@/static/icons/icon_drag.svg";

const DraggableSnapProgressBar = () => {
  const snapPoints = Array.from({ length: 11 }, (_, index) => index * 10);

  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const updateProgress = (clientX: number): void => {
    if (!progressBarRef.current) return;

    const progressBarWidth: number = progressBarRef.current.offsetWidth;
    const progressBarLeft: number =
      progressBarRef.current.getBoundingClientRect().left;

    let calculatedProgress: number =
      ((clientX - progressBarLeft) / progressBarWidth) * 100;

    const closestSnapPoint: number = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - calculatedProgress) < Math.abs(prev - calculatedProgress)
        ? curr
        : prev
    );

    setProgress(closestSnapPoint);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateProgress(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative select-none"
    >
      <div ref={progressBarRef} className="select-none">
        <Progress.Root size="md">
          <Progress.Section value={progress} color="cyan"></Progress.Section>
          <Progress.Section
            value={100 - progress}
            color="pink"
          ></Progress.Section>
        </Progress.Root>

        <div
          onMouseDown={handleMouseDown}
          style={{
            position: "absolute",
            left: `calc(${progress}% - 10px)`,
            bottom: "100%",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <DragIcon />
        </div>
      </div>
      <Flex justify={"space-between"} className="mt-2">
        {snapPoints.map((dot, key) => (
          <div
            key={key}
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
          ></div>
        ))}
      </Flex>
    </div>
  );
};

export default DraggableSnapProgressBar;
