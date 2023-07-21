import { MouseEventHandler } from "react";
import Image from "next/image";
import { title } from "process";
type Props = {
  handleClick?: MouseEventHandler;
  title: string;
  type?: "button" | "submit";
};

const Button = ({ handleClick, type, title }: Props) => {
  return (
    <button
      type={type || "button"}
      className="flexCenter gap-3 px-4 py-3 bg-violet-500 rounded-xl text-sm font-medium max-md:w-full text-white"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
