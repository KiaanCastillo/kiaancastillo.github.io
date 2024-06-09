import projectGathersfu from "./assets/project-gathersfu.png";
import projectPurposeui from "./assets/project-purposeui.png";
import projectPeakbuddies from "./assets/project-peakbuddies.png";
import portraitKiaan from "./assets/portrait-kiaan.png";
import { IconWrapper, IconScissors } from "./components/icons";
import { getCurrentVancouverTimeString } from "./util/date";

function App() {
  return (
    <>
      <nav className="px-6 pt-6 lg:px-0 lg:pt-0 flex flex-col gap-4	lg:gap-8 lg:fixed lg:ml-16 m-auto max-w-screen-sm">
        <header>
          <h2 className="text-xs font-medium">Kiaan Castillo</h2>
          <p className="text-xs">Product designer & developer</p>
        </header>
        <ul className="flex gap-3 lg:block">
          <li className="mb-3">
            <a href="/" className="text-gray-400 text-xs">
              LinkedIn
            </a>
          </li>
          <li className="mb-3">
            <a href="/" className="text-gray-400 text-xs">
              GitHub
            </a>
          </li>
          <li className="mb-3">
            <a href="/" className="text-gray-400 text-xs">
              Dribbble
            </a>
          </li>
          <li className="mb-3">
            <a href="/" className="text-gray-400 text-xs">
              Email
            </a>
          </li>
          <li className="mb-3">
            <a href="/" className="text-gray-400 text-xs">
              CV
            </a>
          </li>
        </ul>
        <hr className="bg-gray-100 border-0 h-px hidden lg:block" />
        <p className="font-mono text-gray-400 text-[0.63rem] hidden lg:block">
          Last updated 31/05/24
        </p>
      </nav>
      <main className="mt-12 mb-12 max-w-screen-sm m-auto lg:mt-24 lg:mb-24 px-6 lg:px-0">
        <section className="mb-8">
          <h1 className="font-serif italic mb-8 text-[2.5rem]">
            Crafting interfaces & <br />
            systems with intention
          </h1>
          <p>
            Hey, I’m Kiaan and I am a digital product designer and developer.{" "}
          </p>
          <p className="mb-6">
            Currently, I lead development and product at Purposely.
          </p>
          <p>
            I love building products from 0→1 and exploring where it can go
            next. Being involved in every step of the process and getting deep
            into the problem, the pixels, and the code is my happy place.
          </p>
        </section>
        <section>
          <article className="mb-12">
            <a href="/">
              <img src={projectGathersfu} alt="" className="mb-4" />
              <h3 className=" font-medium">GatherSFU</h3>
              <p>Solving the university student’s biggest problem</p>
            </a>
          </article>
          <article className="mb-12">
            <a href="/">
              <img src={projectPurposeui} alt="" className="mb-4" />
              <h3 className=" font-medium">Purpose UI</h3>
              <p>
                An accessible and friendly design system for the Purposely
                platform
              </p>
            </a>
          </article>
          <article className="mb-12">
            <a href="">
              <img src={projectPeakbuddies} alt="" className="mb-4" />
              <h3 className=" font-medium">PeakBuddies</h3>
              <p>“BeReal” but for hackathons, a fresh new take on networking</p>
            </a>
          </article>
        </section>
        <article className="relative mt-[4.5rem] mb-[4.5rem]">
          <IconWrapper className="absolute left-[-1.5rem]">
            <IconScissors />
          </IconWrapper>
          <hr className="border-0 h-px bg-dashed bg-[length:11px_11px]" />
        </article>
        <section className="block md:flex gap-7">
          <section className="relative mb-8 lg:mb-0">
            <h2 className="font-serif italic text-[2rem] whitespace-nowrap">
              And that’s only
              <br />
              just the beginning
            </h2>
            <img
              src={portraitKiaan}
              className="max-w-[9.5rem] mt-[-1.25rem] md:absolute left-5"
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
          </section>
        </section>
      </main>
      <footer className="max-w-screen-sm m-auto font-mono text-gray-400 flex justify-between pb-4 px-6 lg:px-0">
        <p className="text-[0.63rem]">Always building, always learning</p>
        <p className="text-[0.63rem]">{getCurrentVancouverTimeString()}</p>
      </footer>
    </>
  );
}

export default App;
