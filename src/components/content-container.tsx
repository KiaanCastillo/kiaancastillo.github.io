interface ContentContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const ContentContainer = ({
  children,
  className = "",
}: ContentContainerProps) => {
  return (
    <main
      className={`mt-12 mb-12 max-w-screen-sm m-auto lg:mt-24 lg:mb-24 px-6 lg:px-0 ${className}`}
    >
      {children}
    </main>
  );
};
