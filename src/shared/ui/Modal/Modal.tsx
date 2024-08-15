import {
  Modal,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React, { FC } from "react";
import Button, { ButtonSize } from "../Button/Button";
import cn from "classnames";
import styles from "./styles.module.scss";

export enum ModalSize {
  s = "size_s",
}
export enum ModalVariant {
  first = "modal__first",
}

interface ModalI {
  children: React.ReactNode;
  className?: string;
  size?: ModalSize;
  isOpen?: boolean;
  onClose?: () => void;
  variant?: ModalVariant;
}

const ModalComponent: FC<ModalI> = ({
  children,
  className,
  size,
  variant,
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
      className={cn(
        className,
        size && styles[size],
        variant && styles[variant]
      )}
      {...props}
    >
      <ModalContent className="w-full">
        {(onClose: () => void) => (
          <>
            {children}
            <ModalFooter className="flex justify-center items-center">
              <Button
                size={ButtonSize.L}
                onClick={onClose}
                className="cursor-pointer"
              >
                Оставить заявку
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
