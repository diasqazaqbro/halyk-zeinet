import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import React, { FC } from "react";
import cn from "classnames";

interface ModalI {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalComponent: FC<ModalI> = ({
  children,
  className,
  isOpen,
  onClose,
  ...props
}) => {
  const { onOpenChange } = useDisclosure();
  return (
    <Modal
      backdrop="opaque"
      placement="center"
      style={{
        maxWidth: "50.25rem",
        borderRadius: "12px",
        background: "#fff",
        position: "relative",
        zIndex: 100,
      }}
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        backdrop: "bg-[#00846E]/50 backdrop-opacity-30",
      }}
      className={cn(className)}
      {...props}
    >
      <ModalContent className="w-full">
        {(onClose: () => void) => <>{children}</>}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
