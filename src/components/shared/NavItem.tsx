type NavItemProps = {
  href?: string;
  text?: string;
};

export const NavItem = ({ href, text }: NavItemProps) => (
  <li>
    <a
      href={href}
      className="duration-300 font-medium ease-linear hover:text-primary py-3"
    >
      {text}
    </a>
  </li>
);
