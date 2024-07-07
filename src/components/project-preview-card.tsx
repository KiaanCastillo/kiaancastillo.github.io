import { Link } from "react-router-dom";

interface ProjectPreviewCardProps {
  imageSrc: string;
  title: string;
  description: string;
  projectKey: string;
}

export const ProjectPreviewCard = ({
  imageSrc,
  title,
  description,
  projectKey,
}: ProjectPreviewCardProps) => {
  return (
    <article className="mb-12 hover:translate-y-[-0.25rem] transition-transform ease-in-out duration-[250ms] ">
      <Link to={`projects/${projectKey}`}>
        <img src={imageSrc} alt="" className="mb-4" />
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </Link>
    </article>
  );
};
