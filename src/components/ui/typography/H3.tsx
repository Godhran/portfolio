import React from "react";
import "./Typography.css";
import { Typography } from "./Typography.types";

export const H3 = ({ children, className = "" }: Typography) => {
  return (
    <h3
      className={`text-xl font-bold md:leading-tight mb-3 text-start ${className}`}
    >
      {children}
    </h3>
  );
};
