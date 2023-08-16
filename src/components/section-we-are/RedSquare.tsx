import { FC } from "react";

const RedSquare: FC<{ className: string }> = ({ className }) => {
  return <span className={`absolute bg-black ${className}`}></span>;
};

export default RedSquare;
