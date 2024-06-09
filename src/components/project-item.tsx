interface ProjectItemProps {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
}

export const ProjectItem = ({
  imageSrc,
  title,
  description,
  href,
}: ProjectItemProps) => {
  return (
    <article className="mb-12 hover:animate-perk-up">
      <a href={href}>
        <img src={imageSrc} alt="" className="mb-4" />
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </a>
    </article>
  );
};
