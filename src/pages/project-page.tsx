import { ContentContainer, Navbar, DashedDivider } from "../components";
import { Link } from "react-router-dom";
import projectGathersfu from "../assets/project-gathersfu.png";
import highlightsSignIn from "../assets/projects/gathersfu/highlights-sign-in.png";
import highlightsDesignSystem from "../assets/projects/gathersfu/highlights-design-system.png";
import highlightsDiscover from "../assets/projects/gathersfu/highlights-discover.png";
import highlightsCampusBanners from "../assets/projects/gathersfu/highlights-campus-banners.png";
import highlightsMobileView from "../assets/projects/gathersfu/highlights-mobile-view.png";
import problemReddit from "../assets/projects/gathersfu/problem-reddit.png";
import solutionMeetup from "../assets/projects/gathersfu/solution-meetup.png";
import resultAwardsBeta from "../assets/projects/gathersfu/result-awards-beta.png";

export const ProjectPage = () => {
  return (
    <>
      <Navbar
        header={
          <header>
            <Link to="/">
              <p className="text-xs text-gray-400">← Back</p>
            </Link>
            <h2 className="text-xs font-medium">GatherSFU</h2>
          </header>
        }
        className="opacity-0 animate-blur-in [--blur-delay:50ms]"
        links={[
          { href: "#highlights", label: "Highlights" },
          { href: "", label: "Problem" },
          { href: "", label: "Solution" },
          { href: "", label: "Result" },
        ]}
      />
      <ContentContainer className="flex flex-col gap-12 opacity-0 animate-blur-in [--blur-delay:50ms]">
        <header>
          <h2 className="font-medium mb-2">GatherSFU</h2>
          <h1 className="italic font-serif text-[2rem] mb-4">
            Solving the university
            <br />
            student’s biggest problem
          </h1>
          <a
            href="https://gathersfu.web.app/"
            target="_blank"
            className="underline mb-8 block"
          >
            View Project
          </a>
          <img src={projectGathersfu} alt="GatherSFU" />
        </header>
        <section className="grid grid-cols-2 gap-4 text-gray-500">
          <ul>
            <h3 className="font-medium text-gray-700 mb-1">Role</h3>
            <li>
              Primary Product Designer
              <br />& Frontend Developer
            </li>
          </ul>
          <ul>
            <h3 className="font-medium text-gray-700 mb-1">Timeline</h3>
            <li>StormHacks 2022, 48-hour hackathon,</li>
            <li>3rd place & best pitch winner,</li>
            <li>rebranded & redesigned afterwards</li>
          </ul>
          <ul>
            <h3 className="font-medium text-gray-700 mb-1">Skills</h3>
            <li>Frontend Development</li>
            <li>Design Systems</li>
            <li>Product Design</li>
          </ul>
          <ul>
            <h3 className="font-medium text-gray-700 mb-1">Team</h3>
            <li>
              <a href="/" target="_blank" className="underline">
                Setu Patel
              </a>
            </li>
            <li>
              <a href="/" target="_blank" className="underline">
                Cassandra Wells
              </a>
            </li>
            <li>
              <a href="/" target="_blank" className="underline">
                Tal Zaloilov
              </a>
            </li>
          </ul>
        </section>
        <DashedDivider />
        <section>
          <h2 className="font-medium mb-1">Highlights</h2>
          <p className="mb-4 text-gray-500">
            These are some of the screens and illustrations I designed using
            Figma, all from scratch
          </p>
          <section className="flex gap-8 flex-col">
            <figure>
              <img src={highlightsSignIn} alt="" />
              <figcaption>
                Sign in page featuring a custom illustration for the background
              </figcaption>
            </figure>
            <figure>
              <img src={highlightsDesignSystem} alt="" />
              <figcaption>
                Colours and typography for the application
              </figcaption>
            </figure>
            <figure>
              <img src={highlightsDiscover} alt="" />
              <figcaption>Discover page - Burnaby Campus</figcaption>
            </figure>
            <figure>
              <img src={highlightsCampusBanners} alt="" />
              <figcaption>
                Custom banner illustrations for the Burnaby, Surrey, and
                Vancouver campuses
              </figcaption>
            </figure>
            <figure>
              <img src={highlightsMobileView} alt="" />
              <figcaption>
                Instant messaging and event page in mobile view
              </figcaption>
            </figure>
          </section>
        </section>
        <section>
          <h2 className="font-medium mb-1">Problem</h2>
          <p className="italic font-serif text-[2rem] mb-4">
            The university student’s biggest concern isn’t grades
          </p>
          <p className="mb-4">
            In 2015, 64% of post-secondary students surveyed by Stats Canada
            reported feeling “very lonely”. Another 55% cited a combination of
            several factors — including school work, trouble with interpersonal
            relationships, and living alone for the first time — as the main
            cause of their struggles with isolation and, in severe cases,
            depression. These numbers have gotten nothing but worse since the
            start of the pandemic.
          </p>
          <figure>
            <img src={problemReddit} alt="" />
            <figcaption>
              Posts on Reddit about the difficulty making friends in university
            </figcaption>
          </figure>
        </section>
        <section>
          <h2 className="font-medium mb-2">Solution</h2>
          <p className="mb-4">
            Enter GatherSFU - a social gathering website designed specifically
            for the Simon Fraser University students to fill in those empty
            blocks between classes with new friends and experiences.
            <br />
            <br />
            The idea is simple - you can either create a post on the gathering
            board, and fill it in with things to do or people you’re looking to
            meet, or look through all open posts for something fun currently
            happening in the community. Once you join a gathering room, you are
            greeted with a realtime chat of future friends with similar
            interests.
          </p>
          <figure>
            <img src={solutionMeetup} alt="" />
            <figcaption>Chat page and create meet up modal</figcaption>
          </figure>
        </section>
        <section>
          <h2 className="font-medium mb-2">Result</h2>
          <p className="mb-4">
            GatherSFU and our team placed 3rd place and best pitch prizes at the
            2022 StormHacks hackathon. The reception by the judges and audience
            members were very positive, with many alumni judges saying they
            wished they had something like this when they were in school.
            <br />
            <br />
            After the hackathon, the team took to the SFU community to gauge
            interest in an open beta of the platform. With only one post to a
            popular SFU Facebook group page, we garnered 30 sign ups for our
            beta program.
          </p>
          <figure>
            <img src={resultAwardsBeta} alt="" />
            <figcaption>
              StormHacks 2022 winner and open beta results
            </figcaption>
          </figure>
        </section>
      </ContentContainer>
    </>
  );
};
