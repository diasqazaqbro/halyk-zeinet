import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  className?: string;
  size?: ButtonSize;
}

const Button = ({ children, className, size, ...rest }: IButton) => {
  return (
    <button
      type="submit"
      aria-label="Кнопка нажать"
      className={cn(className, size && styles[size], styles.button)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
