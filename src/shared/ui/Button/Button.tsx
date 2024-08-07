import React from "react";
import styles from "./styles.module.scss";

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
  Modal = "size_modal",
  Project = "size_project",
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  size?: ButtonSize;
}

const Button = ({ children, ...rest }: IButton) => {
  return (
    <button type="submit" {...rest}>
      {children}
    </button>
  );
};

export default Button;
