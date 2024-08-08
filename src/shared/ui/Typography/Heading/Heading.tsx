import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface IHeadingProps {
  children: React.ReactNode | string;
  className?: string;
  component: "h1" | "h2" | "h3" | "p";
}

const componentMap = {
  h1: styles.heading_1,
  h2: styles.heading_2,
  h3: styles.heading_3,
  p: styles.text,
};

const Heading = ({
  component: Component,
  children,
  className,
}: IHeadingProps) => {
  const componentClassName = componentMap[Component];

  return (
    <Component className={cn(componentClassName, className)}>
      {children}
    </Component>
  );
};

export default Heading;
