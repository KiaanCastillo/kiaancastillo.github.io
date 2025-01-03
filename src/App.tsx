import portraitKiaan from "./assets/portrait-kiaan.png";
import {
  IconWrapper,
  IconScissors,
  Navbar,
  ProjectPreviewCard,
  Footer,
  ContentContainer,
  DashedDivider,
  LinkItem,
} from "./components";
import { useEffect } from "react";
import { PROJECT_LIST, Project } from "./data";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const NAV_BAR_ITEMS: LinkItem[] = [
    {
      href: "https://www.linkedin.com/in/kiaancastillo/",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/KiaanCastillo",
      label: "GitHub",
    },
    {
      href: "https://dribbble.com/kiaancastillo",
      label: "Dribbble",
    },
    {
      href: "mailto:kiaancastillo@gmail.com",
      label: "Email",
    },
  ];

  return (
    <>
      <Navbar
        header={
          <header>
            <h2 className="text-xs font-medium">Kiaan Castillo</h2>
            <p className="text-xs">Engineer & Designer</p>
          </header>
        }
        links={NAV_BAR_ITEMS}
        className="opacity-0 animate-blur-in [--blur-delay:50ms]"
        footer={
          <section>
            <p className="font-mono text-gray-400 text-[0.63rem] hidden lg:block mb-1 ">
              Last updated 23/12/24
            </p>
            <a
              href="https://github.com/KiaanCastillo/kiaancastillo.github.io"
              target="_blank"
              className="font-mono text-gray-400 text-[0.63rem] hidden lg:block underline hover:text-gray-500 transition-colors duration-100 ease-in-out"
            >
              View source code
            </a>
          </section>
        }
      />
      <ContentContainer>
        <section className="opacity-0 animate-blur-in [--blur-delay:50ms] mb-8">
          <h1 className="font-serif italic mb-8 text-[2.5rem]">
            Always building, <br />
            always learning
          </h1>
          <p>
            Hey, I’m Kiaan and I am a software engineer and product designer.
          </p>
          <p className="mb-6">Currently, I’m a software engineer at Amazon.</p>
          <p>
            I love building products from 0→1 and exploring where they can go
            next. Being involved in every step of the process and getting deep
            into the problem, the pixels, and the code is my happy place; making
            sure everything I put out into the world is of utmost quality is my
            goal.
          </p>
        </section>
        <section className="opacity-0 animate-blur-in [--blur-delay:100ms]">
          {Object.keys(PROJECT_LIST).map((projectKey, index) => {
            const {
              header: { name, title, image },
            }: Project = PROJECT_LIST[projectKey];

            return (
              <ProjectPreviewCard
                imageSrc={image}
                title={name}
                description={title}
                projectKey={projectKey}
                key={index}
              />
            );
          })}
        </section>
        <article className="opacity-0 animate-blur-in [--blur-delay:150ms] relative mt-[4.5rem] mb-[4.5rem]">
          <IconWrapper className="absolute left-[-1.5rem]">
            <IconScissors />
          </IconWrapper>
          <DashedDivider />
        </article>
        <section className="opacity-0 animate-blur-in [--blur-delay:150ms] block md:flex gap-7">
          <section className="relative mb-8 lg:mb-0">
            <h2 className="font-serif italic text-[2rem] whitespace-nowrap">
              And that’s only
              <br />
              just the beginning
            </h2>
            <img
              src={portraitKiaan}
              className="max-w-[9.5rem] mt-[-1.25rem] ml-5 md:ml-0 md:absolute left-7 hover:-rotate-2 hover:cursor-pointer transition-transform duration-[250ms] ease-in-out"
              alt="A photo of Kiaan Castillo, facing away from the camera at Santa Monica beach"
            />
          </section>
          <section>
            <p className="mb-6">
              Recently, I moved to Seattle and started a brand new chapter of my
              life! I’m so grateful and excited for this new era and for what’s
              to come.
            </p>
            <p>For now, here’s some stuff I’m doing nowadays:</p>
            <ul className=" list-disc text-sm ml-7 mt-4">
              <li>
                Bouldering! I was introduced to a cool community and I’m looking
                to go frequently in the new year
              </li>
              <li>Reconnecting with my Filipino roots</li>
              <li>
                Writing! When I was younger I was constantly writing stories and
                building complex worlds and plots
              </li>
              <li>
                Revisiting my love for music and playing in an orchestra,
                specifically the piano and violin
              </li>
            </ul>
            <p className="mt-4">
              And many more... but for now, thanks for stopping by :) Let's{" "}
              <a
                href="https://www.linkedin.com/in/kiaancastillo/"
                target="_blank"
                className="underline hover:text-gray-500 transition-colors duration-100 ease-in-out"
              >
                connect
              </a>{" "}
              and chat!
            </p>
          </section>
        </section>
      </ContentContainer>
      <Footer />
    </>
  );
}

export default App;
