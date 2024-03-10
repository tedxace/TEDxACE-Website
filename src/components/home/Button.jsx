import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const Button = ({ text, link, className }) => {
  return (
    <Link to={link ? link : "#"}>
      <button
        className={cn(
          "button group relative flex items-center justify-center overflow-hidden text-center transform skew-x-0 w-[120px] h-[40px] md:w-[144px] md:h-[56px] border-tedx-heading bg-tedx-bg border border-spacing-3 border-collapse mt-5 mb-2 py-2 px-3 rounded-md font-['Inter'] ",
          className
        )}
      >
        <span className="button_text relative uppercase md:text-sm text-[10px] font-black tracking-tighter group-hover:text-tedx-brown transition text-tedx-heading z-10 ">
          {text ? text : "Buy Tickets"}
        </span>
        <span className="absolute inset-0 bg-tedx-heading group-hover:w-full w-0 transition-all group-hover:animate-skew animate-skewOut"></span>
      </button>
    </Link>
  );
};

export default Button;
