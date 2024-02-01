import React from "react";
import { twMerge } from "tailwind-merge";

const Badge = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <span
      className={twMerge(
        "bg-gray-800 text-white border border-solid border-gray-700 p-1 rounded-md",
        className
      )}
    >
      {title}
    </span>
  );
};

export default Badge;
