import projectGathersfu from "./assets/project-gathersfu.png";
import projectPurposeui from "./assets/project-purposeui.png";
import projectPeakbuddies from "./assets/project-peakbuddies.png";
import portraitKiaan from "./assets/portrait-kiaan.png";
import {
  IconWrapper,
  IconScissors,
  Navbar,
  ProjectItem,
  Footer,
} from "./components";

function App() {
  const NAV_BAR_ITEMS = [
    { href: "https://www.linkedin.com/in/kiaancastillo/", label: "LinkedIn" },
    { href: "https://github.com/KiaanCastillo", label: "GitHub" },
    { href: "https://dribbble.com/kiaancastillo", label: "Dribbble" },
    { href: "mailto:kiaancastillo@gmail.com", label: "Email" },
    { href: "/", label: "CV" },
  ];

  const PROJECT_ITEMS = [
    {
      imageSrc: projectGathersfu,
      title: "GatherSFU",
      description: "Solving the university student’s biggest problem",
      href: "/",
    },
    {
      imageSrc: projectPurposeui,
      title: "Purpose UI",
      description:
        "An accessible and friendly design system for the Purposely platform",
      href: "/",
    },
    {
      imageSrc: projectPeakbuddies,
      title: "PeakBuddies",
      description:
        "“BeReal” but for hackathons, a fresh new take on networking",
      href: "/",
    },
  ];

  return (
    <>
      <Navbar
        links={NAV_BAR_ITEMS}
        className="opacity-0 animate-blur-in [--blur-delay:50ms]"
      />
      <main className="mt-12 mb-12 max-w-screen-sm m-auto lg:mt-24 lg:mb-24 px-6 lg:px-0">
        <section className="opacity-0 animate-blur-in [--blur-delay:50ms] mb-8">
          <h1 className="font-serif italic mb-8 text-[2.5rem]">
            Crafting interfaces & <br />
            systems with intention
          </h1>
          <p>
            Hey, I’m Kiaan and I am a digital product designer and developer.
          </p>
          <p className="mb-6">
            Currently, I lead development and product at{" "}
            <a
              href="https://purposely.co"
              target="_blank"
              className="underline"
            >
              Purposely
            </a>
            .
          </p>
          <p>
            I love building products from 0→1 and exploring where they can go
            next. Being involved in every step of the process and getting deep
            into the problem, the pixels, and the code is my happy place; making
            sure everything I put out into the world is of utmost quality is my
            goal.
          </p>
        </section>
        <section className="opacity-0 animate-blur-in [--blur-delay:100ms]">
          {PROJECT_ITEMS.map((project) => (
            <ProjectItem {...project} />
          ))}
        </section>
        <article className="opacity-0 animate-blur-in [--blur-delay:150ms] relative mt-[4.5rem] mb-[4.5rem]">
          <IconWrapper className="absolute left-[-1.5rem]">
            <IconScissors />
          </IconWrapper>
          <hr className="border-0 h-px bg-dashed bg-[length:11px_11px]" />
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
              I recently went on a life-changing trip with some of my best
              friends and it’s got me thinking a lot about what kind of life I
              want to live. So right now, I’m discovering that and pushing
              myself out of my comfort zone to explore new things.
            </p>
            <p>Here’s some stuff I’m doing now:</p>
            <ul className=" list-disc text-sm ml-7 mt-4">
              <li>Exploring my fashion, send me shoe and earring recs! </li>
              <li>
                Working on a side project, stay tuned for more info and a beta
                (hint: Notion)
              </li>
              <li>
                Picking up my Sony A6000 after a few years and rediscovering my
                love for cinematography
              </li>
              <li>Starting my running era</li>
              <li>Making more time for my loved ones</li>
            </ul>
            <p className="mt-4">
              And many more... but for now, thanks for stopping by :)
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
