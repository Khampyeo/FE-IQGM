import React from "react";
import { Button, Flex, Modal } from "@mantine/core";
import { useNavigate } from "zmp-ui";
import successImg from "@/static/images/success-confirm.png";

const ConfirmSuccess = ({ opened, close }) => {
  const navigate = useNavigate();
  return (
    <Modal
      radius={"lg"}
      centered
      opened={opened}
      withCloseButton={false}
      onClose={close}
      padding={"lg"}
    >
      <Flex justify="center">
        <img src={successImg} alt="" />
      </Flex>
      <div className="text-center mt-8">
        <h1 className="text-primary font-semibold text-xl">
          Booking Successful!
        </h1>
        <p>You can view booking details on the My Booking menu</p>
      </div>
      <Button
        fullWidth
        radius={50}
        color="var(--primary)"
        size="lg"
        className="mt-8"
        onClick={() => navigate("/", { animate: false })}
      >
        OK
      </Button>
    </Modal>
  );
};
export default ConfirmSuccess;
