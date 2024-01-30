import React from "react";

const Badge = ({ title }: { title: string }) => {
  return (
    <span className="bg-gray-800 text-white border border-solid border-gray-700 p-1 rounded-md">
      {title}
    </span>
  );
};

export default Badge;
