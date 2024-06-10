interface LinkItem {
  href: string;
  label: string;
}

interface NavbarProps {
  links: LinkItem[];
  className?: string;
}

export const Navbar = ({ links, className = "" }: NavbarProps) => {
  return (
    <nav
      className={`px-6 pt-6 lg:px-0 lg:pt-0 flex flex-col gap-4	lg:gap-8 lg:fixed lg:ml-16 m-auto max-w-screen-sm ${className}`}
    >
      <header>
        <h2 className="text-xs font-medium">Kiaan Castillo</h2>
        <p className="text-xs">Product designer & developer</p>
      </header>
      <ul className="flex gap-3 lg:block">
        {links.map(({ href, label }, index) => (
          <li key={index} className="mb-3">
            <a href={href} className="text-gray-400 text-xs" target="_blank">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <hr className="bg-gray-100 border-0 h-px hidden lg:block" />
      <section>
        <p className="font-mono text-gray-400 text-[0.63rem] hidden lg:block mb-1">
          Last updated 09/06/24
        </p>
        <p className="font-mono text-gray-400 text-[0.63rem] hidden lg:block underline">
          <a
            href="https://github.com/KiaanCastillo/kiaancastillo.github.io"
            target="_blank"
          >
            View source code
          </a>
        </p>
      </section>
    </nav>
  );
};
