import type { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick, className = "" }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600 ${className}`}
  >
    {children}
  </button>
);
