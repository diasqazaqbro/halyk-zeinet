import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface IHeadingProps {
  children: React.ReactNode | string;
  className?: string;
  component: "h1" | "h2" | "h3";
}

const Heading = ({ component, children, className }: IHeadingProps) => {
  return (
    <>
      {component === "h1" && (
        <h1 className={cn(styles.heading_1, className)}>{children}</h1>
      )}
      {component === "h2" && (
        <h2 className={cn(styles.heading_2, className)}>{children}</h2>
      )}
      {component === "h3" && (
        <h3 className={cn(styles.heading_3, className)}>{children}</h3>
      )}
    </>
  );
};

export default Heading;
