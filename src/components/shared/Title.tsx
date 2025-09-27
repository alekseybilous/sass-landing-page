import type { ReactNode } from "react";

type TitleProps = {
  children?: ReactNode;
  className?: string;
};

export const Title = ({ children, className = "" }: TitleProps) => (
  <h1
    className={`text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl ${className}`}
  >
    {children}
  </h1>
);
