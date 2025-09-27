import { type ReactNode, useEffect } from "react";
import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";

type LayoutProps = {
  title: string;
  children?: ReactNode;
};

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar title={title} />

      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>

      <Footer title={title} />
    </>
  );
};
