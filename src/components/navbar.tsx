import { HashLink } from "react-router-hash-link";

export interface LinkItem {
  href: string;
  label: string;
  useHashLink?: boolean;
}

interface NavbarProps {
  header: JSX.Element;
  links: LinkItem[];
  className?: string;
  footer?: JSX.Element;
}

export const Navbar = ({
  header,
  links,
  className = "",
  footer,
}: NavbarProps) => {
  return (
    <nav
      className={`px-6 pt-6 lg:px-0 lg:pt-0 flex flex-col gap-4	lg:gap-8 lg:fixed lg:ml-16 m-auto max-w-screen-sm ${className}`}
    >
      {header}
      <ul className="flex gap-3 lg:block">
        {links.map(({ href, label, useHashLink = false }, index) => (
          <li key={index} className="mb-3">
            {useHashLink ? (
              <HashLink
                to={href}
                className="text-gray-400 text-xs hover:text-gray-500 transition-colors duration-100 ease-in-out"
              >
                {label}
              </HashLink>
            ) : (
              <a
                href={href}
                className="text-gray-400 text-xs hover:text-gray-500 transition-colors duration-100 ease-in-out"
                target="_blank"
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
      {footer && <hr className="bg-gray-100 border-0 h-px hidden lg:block" />}
      {footer}
    </nav>
  );
};
