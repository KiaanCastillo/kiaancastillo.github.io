import gatherSFUProjectImage from "../assets/project-gathersfu.png";
import gatherSFUHighlightsSignIn from "../assets/projects/gathersfu/highlights-sign-in.png";
import gatherSFUHighlightsDesignSystem from "../assets/projects/gathersfu/highlights-design-system.png";
import gatherSFUHighlightsDiscover from "../assets/projects/gathersfu/highlights-discover.png";
import gatherSFUHighlightsCampusBanners from "../assets/projects/gathersfu/highlights-campus-banners.png";
import gatherSFUHighlightsMobileView from "../assets/projects/gathersfu/highlights-mobile-view.png";
import gatherSFUProblemReddit from "../assets/projects/gathersfu/problem-reddit.png";
import gatherSFUSolutionMeetup from "../assets/projects/gathersfu/solution-meetup.png";
import gatherSFUResultAwardsBeta from "../assets/projects/gathersfu/result-awards-beta.png";

import purposeUIProjectImage from "../assets/project-purposeui.png";

import peakBuddiesProjectImage from "../assets/project-peakbuddies.png";
import peakBuddiesHighlightsLoginOnboarding from "../assets/projects/peakbuddies/highlights-login-onboarding.png";
import peakBuddiesHighlightsNetworkingFlow from "../assets/projects/peakbuddies/highlights-networking-flow.png";
import peakBuddiesSolution from "../assets/projects/peakbuddies/solution.png";
import peakBuddiesResultAnnouncement from "../assets/projects/peakbuddies/result-announcement.png";
import peakBuddiesResultPresentation from "../assets/projects/peakbuddies/result-presentation.png";

export interface Project {
  header: {
    name: string;
    title: string;
    ctaLabel: string;
    ctaLink: string;
    image: string;
  };
  info: {
    role: string[];
    timeline: string;
    skills: string[];
    team?: { name: string; link: string }[];
    tools?: string[];
  };
  highlights?: {
    description: string;
    images?: { src: string; alt: string }[];
  };
  privateNotice?: {
    message: string[];
  };
  problem?: {
    title?: string;
    content: string[];
    images?: { src: string; alt: string }[];
  };
  solution?: {
    content: string[];
    images?: { src: string; alt: string }[];
  };
  result?: {
    content: string[];
    images?: { src: string; alt: string }[];
  };
}

interface Projects {
  [key: string]: Project;
}

export const PROJECT_LIST: Projects = {
  "peak-buddies": {
    header: {
      name: "PeakBuddies",
      title: "“BeReal” but for hackathons, a fresh new take on networking",
      ctaLabel: "View GitHub Repo",
      ctaLink: "https://github.com/Mountain-Madness-24/peakbuddies",
      image: peakBuddiesProjectImage,
    },
    info: {
      role: ["Primary Product Designer", "Frontend Developer"],
      timeline: "Mountain Madness 2024, 24-hour hackathon, 1st place winner",
      skills: ["Frontend Development", "Design Systems", "Product Design"],
      team: [
        {
          name: "Zachary Chan",
          link: "https://www.linkedin.com/in/zachary-chan-a125a01bb/",
        },
        {
          name: "Kian Hosseinkhani",
          link: "https://www.linkedin.com/in/kian-khani/",
        },
        {
          name: "Peyman Zhiani",
          link: "https://www.linkedin.com/in/peiman-zhiani/",
        },
      ],
    },
    highlights: {
      description:
        "PeakBuddies borrows the simple concept of “BeReal” and leverages community at hackathons to bring a fresh take on the networking experience. I designed the user experience and brand identity of the product as well as lead implementation of the frontend development.",
      images: [
        {
          src: peakBuddiesHighlightsLoginOnboarding,
          alt: "Login and onboarding screens",
        },
        {
          src: peakBuddiesHighlightsNetworkingFlow,
          alt: "The networking flow of PeakBuddies",
        },
      ],
    },
    problem: {
      content: [
        "Everyone in university is told to go out and network. But everyone knows how intimidating it is...especially as an undergrad. I remember going to my first networking event with my friends and how paralyzed we felt standing in a room full of working professionals with years of experience under their belts. Meanwhile, us students clung to our tiny tables eating our fancy mini burgers. ",
        "But what exactly makes networking scary, especially for a university student? From personal experience, I can narrow the issue down to two words: awkward and ingenuine. It’s awkward to walk up to a stranger and talk to them, especially someone of higher seniority. Then, there’s the transactional nature of networking. It doesn’t feel like you’re making a genuine connection with the other party and most of the time this is true. So as a student, how do you actually build a network that you can actually reach out to?",
        "So, when my friends and I heard the theme of this year’s Mountain Madness hackathon, the idea of working on something around a new perspective immediately brought me to my own frustrations with networking.",
        "Then, it hit me: I was currently sitting in a room full of other awkward university students eager to build cool projects and meet other hackers! Let’s leverage that.",
      ],
    },
    solution: {
      content: [
        "Introducing PeakBuddies! What do you do with hundreds of students in an enclosed area, a limited time frame where the majority of the time spent is sitting in the same spot, and the goal of getting everyone to network with each other? Speed networking at random times throughout the event.",
        "The idea is simple: (1) hackathon organizers create an event and set locations of interest where hackers can meet up, (2) hackers join the event by going to a link, (3) at random times throughout the day, hackers get matched and are given instructions to meet up at a pre-determined location, (4) once the pair meet, they start the speed networking and are guided by the app, (5) return to their hacking nests and repeat from step 3!",
      ],
      images: [
        {
          src: peakBuddiesSolution,
          alt: "How PeakBuddies works",
        },
      ],
    },
    result: {
      content: [
        "After hours of hard work, a questionable overnight stay on Burnaby Mountain campus, and one nerve-wracking presentation later, PeakBuddies took home the first place prize! The concept proved to be popular amongst the judges as well as others who we pitched it to.",
        "The team also learned a lot during our 24 hours together since there were a lot of moving components to the application. One was the matching system that ran in the background at a certain interval. The challenge was sending the match info to the appropriate users so that they would receive the match screen at the same time. This required a lot of tinkering with the backend and sockets that took the entire night to get right. Another hurdle was adding the map with the appropriate location market to the top of the new match screen. Using an external API always brings some chaos and that’s exactly what happened during implementation. Luckily, that feature made it by the time the deadline hit.",
        "Overall, the project was a big success and the team’s next move is to pitch this to some local hackathon committees for some early adoption!",
      ],
      images: [
        {
          src: peakBuddiesResultAnnouncement,
          alt: "PeakBuddies wins first place at MountainMadness",
        },
        {
          src: peakBuddiesResultPresentation,
          alt: "The PeakBuddies team during our presentation",
        },
      ],
    },
  },
  "gather-sfu": {
    header: {
      name: "GatherSFU",
      title: "Solving the university student’s biggest problem",
      ctaLabel: "View Project",
      ctaLink: "https://gathersfu.web.app/",
      image: gatherSFUProjectImage,
    },
    info: {
      role: ["Primary Product Designer", "Frontend Developer"],
      timeline:
        "StormHacks 2022, 48-hour hackathon, 3rd place & best pitch winner, rebranded & redesigned afterwards",
      skills: ["Frontend Development", "Design Systems", "Product Design"],
      team: [
        {
          name: "Setu Patel",
          link: "https://www.linkedin.com/in/setu-patel4/",
        },
        {
          name: "Cassandra Wells",
          link: "https://www.linkedin.com/in/cassandrajwells/",
        },
        {
          name: "Tal Zaloilov",
          link: "https://www.linkedin.com/in/tal-zaloilov-9a45451aa/",
        },
      ],
    },
    highlights: {
      description:
        "These are some of the screens and illustrations I designed using",
      images: [
        {
          src: gatherSFUHighlightsSignIn,
          alt: "Sign in page featuring a custom illustration for the background",
        },
        {
          src: gatherSFUHighlightsDesignSystem,
          alt: "Colours and typography for the application",
        },
        {
          src: gatherSFUHighlightsDiscover,
          alt: "Discover page - Burnaby Campus",
        },
        {
          src: gatherSFUHighlightsCampusBanners,
          alt: "Custom banner illustrations for the Burnaby, Surrey, and Vancouver campuses",
        },
        {
          src: gatherSFUHighlightsMobileView,
          alt: "Instant messaging and event page in mobile view",
        },
      ],
    },
    problem: {
      title: "The university student’s biggest concern isn’t grades",
      content: [
        "In 2015, 64% of post-secondary students surveyed by Stats Canada reported feeling “very lonely”. Another 55% cited a combination of several factors — including school work, trouble with interpersonal relationships, and living alone for the first time — as the main cause of their struggles with isolation and, in severe cases, depression. These numbers have gotten nothing but worse since the start of the pandemic.",
      ],
      images: [
        {
          src: gatherSFUProblemReddit,
          alt: "Posts on Reddit about the difficulty making friends in university",
        },
      ],
    },
    solution: {
      content: [
        "Enter GatherSFU - a social gathering website designed specifically for the Simon Fraser University students to fill in those empty blocks between classes with new friends and experiences.",
        "The idea is simple - you can either create a post on the gathering board, and fill it in with things to do or people you’re looking to meet, or look through all open posts for something fun currently happening in the community. Once you join a gathering room, you are greeted with a realtime chat of future friends with similar interests.",
      ],
      images: [
        {
          src: gatherSFUSolutionMeetup,
          alt: "Chat page and create meet up modal",
        },
      ],
    },
    result: {
      content: [
        "GatherSFU and our team placed 3rd place and best pitch prizes at the 2022 StormHacks hackathon. The reception by the judges and audience members were very positive, with many alumni judges saying they wished they had something like this when they were in school.",
        "After the hackathon, the team took to the SFU community to gauge interest in an open beta of the platform. With only one post to a popular SFU Facebook group page, we garnered 30 sign ups for our beta program.",
      ],
      images: [
        {
          src: gatherSFUResultAwardsBeta,
          alt: "StormHacks 2022 winner and open beta results",
        },
      ],
    },
  },
  "purpose-ui": {
    header: {
      name: "Purpose UI",
      title:
        "An accessible and friendly design system for the Purposely platform",
      ctaLabel: "Visit Purposely",
      ctaLink: "https://purposely.co/",
      image: purposeUIProjectImage,
    },
    info: {
      role: ["Primary Designer and Developer"],
      timeline: "January 2023 - Present",
      skills: ["Design Systems", "Accessibility", "Visual Design", "UX Design"],
      tools: ["Figma", "React", "Less"],
    },
    privateNotice: {
      message: [
        "Purposely is an employee experience platform that helps companies build strong and resilient workplace culture through employee volunteer initiatives.",
        "This project is private, please contact me for more info.",
      ],
    },
  },
};
