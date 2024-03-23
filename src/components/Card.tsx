import React from "react";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-3">{children}</div>
  );
};

export default Card;
