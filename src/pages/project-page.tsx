import {
  ContentContainer,
  Navbar,
  DashedDivider,
  IconWrapper,
  IconArrowLeft,
  Footer,
} from "../components";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECT_LIST, Project } from "../data";

export const ProjectPage = () => {
  const { name } = useParams();
  const projectData: Project = PROJECT_LIST[name as keyof typeof PROJECT_LIST];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar
        header={
          <header>
            <Link to="/">
              <div className="text-xs text-gray-400 flex gap-1 items-center">
                <IconWrapper>
                  <IconArrowLeft />
                </IconWrapper>
                Back
              </div>
            </Link>
            <h2 className="text-xs font-medium">GatherSFU</h2>
          </header>
        }
        className="opacity-0 animate-blur-in [--blur-delay:50ms]"
        links={[
          { href: "#highlights", label: "Highlights", useHashLink: true },
          ...(projectData.problem
            ? [{ href: "#problem", label: "Problem", useHashLink: true }]
            : []),
          ...(projectData.solution
            ? [{ href: "#solution", label: "Solution", useHashLink: true }]
            : []),
          ...(projectData.result
            ? [{ href: "#result", label: "Result", useHashLink: true }]
            : []),
        ]}
      />
      <ContentContainer className="flex flex-col gap-12 opacity-0 animate-blur-in [--blur-delay:50ms] scroll-smooth">
        <header>
          <h2 className="font-medium mb-2">{projectData.header.name}</h2>
          <h1 className="italic font-serif text-[2rem] mb-4">
            {projectData.header.title}
          </h1>
          <a
            href={projectData.header.ctaLink}
            target="_blank"
            className="underline mb-8 block"
          >
            {projectData.header.ctaLabel}
          </a>
          <img src={projectData.header.image} alt={projectData.header.name} />
        </header>
        <section className="grid grid-cols-2 gap-4 text-gray-500">
          <ul>
            <h3 className="font-medium text-gray-700 mb-1">Role</h3>
            {projectData.info.role.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
          <ul>
            <h3 className="font-medium text-gray-700 mb-1">Timeline</h3>
            <p className="">{projectData.info.timeline}</p>
          </ul>
          <ul>
            <h3 className="font-medium text-gray-700 mb-1">Skills</h3>
            {projectData.info.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          {projectData.info.team && (
            <ul>
              <h3 className="font-medium text-gray-700 mb-1">Team</h3>
              {projectData.info.team.map(({ name, link }, index) => (
                <li key={index}>
                  <a href={link} target="_blank" className="underline">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {projectData.info.tools && (
            <ul>
              <h3 className="font-medium text-gray-700 mb-1">Tools</h3>
              {projectData.info.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          )}
        </section>
        <DashedDivider />
        {projectData.highlights ? (
          <section>
            <h2 id="highlights" className="font-medium mb-2 pt-6">
              Highlights
            </h2>
            <p className="mb-4 text-gray-500">
              {projectData.highlights.description}
            </p>
            {projectData.highlights.images && (
              <section className="flex gap-8 flex-col">
                {projectData.highlights.images.map(({ src, alt }, index) => (
                  <figure key={index}>
                    <img src={src} alt={alt} />
                    <figcaption>{alt}</figcaption>
                  </figure>
                ))}
              </section>
            )}
          </section>
        ) : (
          <></>
        )}
        {projectData.privateNotice ? (
          <section>
            <h2 id="problem" className="font-medium mb-2 pt-6">
              Notice
            </h2>
            {projectData.privateNotice.message.map((message, index) => (
              <p className="mb-4" key={index}>
                {message}
              </p>
            ))}
          </section>
        ) : (
          <></>
        )}
        {projectData.problem ? (
          <section>
            <h2 id="problem" className="font-medium mb-2 pt-6">
              Problem
            </h2>
            {projectData.problem.title && (
              <p className="italic font-serif text-[2rem] mb-4">
                {projectData.problem.title}
              </p>
            )}
            {projectData.problem.content.map((content, index) => (
              <p className="mb-4" key={index}>
                {content}
              </p>
            ))}
            {projectData.problem.images && (
              <section className="flex gap-8 flex-col">
                {projectData.problem.images.map(({ src, alt }, index) => (
                  <figure key={index}>
                    <img src={src} alt={alt} />
                    <figcaption>{alt}</figcaption>
                  </figure>
                ))}
              </section>
            )}
          </section>
        ) : (
          <></>
        )}
        {projectData.solution ? (
          <section>
            <h2 id="solution" className="font-medium mb-2 pt-6">
              Solution
            </h2>
            {projectData.solution.content.map((content, index) => (
              <p className="mb-4" key={index}>
                {content}
              </p>
            ))}
            {projectData.solution.images && (
              <section className="flex gap-8 flex-col">
                {projectData.solution.images.map(({ src, alt }, index) => (
                  <figure key={index}>
                    <img src={src} alt={alt} />
                    <figcaption>{alt}</figcaption>
                  </figure>
                ))}
              </section>
            )}
          </section>
        ) : (
          <></>
        )}
        {projectData.result ? (
          <section>
            <h2 id="result" className="font-medium mb-2 pt-6">
              Result
            </h2>
            {projectData.result.content.map((content, index) => (
              <p className="mb-4" key={index}>
                {content}
              </p>
            ))}
            {projectData.result.images && (
              <section className="flex gap-8 flex-col">
                {projectData.result.images.map(({ src, alt }, index) => (
                  <figure key={index}>
                    <img src={src} alt={alt} />
                    <figcaption>{alt}</figcaption>
                  </figure>
                ))}
              </section>
            )}
          </section>
        ) : (
          <></>
        )}
        {/* Use if 3 or more projects availble */}
        {/* <footer className="flex justify-between">
          <section className="cursor-pointer">
            <p className="flex items-center gap-1 text-gray-500 text-xs">
              <IconWrapper>
                <IconArrowLeft />
              </IconWrapper>
              Previous project
            </p>
          </section>
          <section className="cursor-pointer">
            <p className="flex items-center gap-1 text-gray-500 text-xs">
              Next Project
              <IconWrapper>
                <IconArrowRight />
              </IconWrapper>
            </p>
          </section>
        </footer> */}
      </ContentContainer>
      <Footer />
    </>
  );
};
