import React from "react";
import "./Typography.css";
import { Typography } from "./Typography.types";

export const H4 = ({ children, className = "" }: Typography) => {
  return (
    <h4
      className={`text-xl font-bold md:leading-tight mb-3 ${className}`}
    >
      {children}
    </h4>
  );
};
