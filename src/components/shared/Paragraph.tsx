import type { ReactNode } from "react";

type ParagraphProps = {
  children?: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className = "" }: ParagraphProps) => (
  <p className={`text-heading-3 md:text-lg ${className}`}>{children}</p>
);
