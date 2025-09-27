import { Container } from "../shared/Container.tsx";
import logo from "../../assets/icon.svg";
import { navItems } from "./Navbar.tsx";
import { NavItem } from "../shared/NavItem.tsx";

type FooterProps = {
  title: string;
};

export const Footer = ({ title }: FooterProps) => (
  <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
    <Container className="pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src={logo} alt={title} className="w-7 h-7 " />
          <span className="text-lg font-semibold text-heading-1">{title}</span>
        </div>

        <ul className="flex gap-6 text-heading-1 ">
          {navItems.map(({ text, href }, key) => (
            <NavItem key={key} href={href} text={text} />
          ))}
        </ul>
      </div>
    </Container>
  </footer>
);
