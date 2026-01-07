import React from "react";
import "./Typography.css";
import { Typography } from "./Typography.types";

export const P = ({ children, className = "" }: Typography) => {
  return (
    <p
      className={`${className}`}
    >
      {children}
    </p>
  );
};
