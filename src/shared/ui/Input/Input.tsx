import React, { InputHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  bgColor?: string;
  className?: string;
  classField?: string;
  children?: ReactNode;
}

const Input: React.FC<IInputProps> = ({
  className,
  classField,
  children,
  ...rest
}) => {
  return (
    <div className={cn(classField, styles.field)}>
      <input
        autoComplete="off"
        className={cn(className, "outline-none w-full", styles.field__input)}
        {...rest}
      />
      {children}
    </div>
  );
};

export default Input;
