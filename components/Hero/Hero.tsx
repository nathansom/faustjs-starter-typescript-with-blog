import React, { ReactNode } from "react";
import className from "classnames/bind";
import { Heading } from "..";
import styles from "./Hero.module.scss";

let cx = className.bind(styles);

export default function Hero({
  title,
  level = "h2",
  children,
  className,
}: {
  title?: string;
  level?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(["component", className])}>
      <Heading level={level}>
        <span className={cx("title")}>{title}</span>
      </Heading>
      {children}
    </div>
  );
}
