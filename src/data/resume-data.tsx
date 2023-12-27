import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "David Chung",
  initials: "DC",
  location: "Toronto, Canada, EST",
  locationLink: "https://www.google.com/maps/place/toronto",
  about:
    "Full Stack Mobile Engineer focused on building products with extra attention to details",
  summary:
    "As a Full Stack Mobile Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with Android, Kotlin, TypeScript, React, Node.js. I have over 5 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1713322706609827840/r7lsuZUg_400x400.jpg",
  personalWebsiteUrl: "https://dchung.dev",
  contact: {
    email: "dvlchung@gmail.com",
    tel: "+14159965339",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dayviec25",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dchungdev/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/dayviec",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Ryerson",
      degree: "Bachelor's Degree in Computer Science",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Verdict MMA",
      link: "https://verdictmma.com",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2023",
      description:
        "Founded Verdict MMA and raised a seed round to create an MMA social platform with a sports betting product. Implemented new features and tech stack from inception to finish while leading the team on improving the way developers ship code.",
    },
    {
      company: "FantasyPros",
      link: "https://fantasypros.com",
      badges: ["Remote"],
      title: "Android Developer → Senior Android Developer",
      logo: ClevertechLogo,
      start: "2018",
      end: "2021",
      description:
        "Created and maintained 6 Android mobile apps for fantasy sports users. Increased the average app star rating from 4.1 to 4.7 and doubled the app's MMR bringing it to one of the top 10 grossing app in the sports category. Converted the entire codebase to 100% kotlin. Built tools on Android for companies like ESPN, Yahoo, Athletic, NBA.",
    },
    {
      company: "COX Automotive",
      link: "https://coxautoinc.com",
      badges: ["Toronto"],
      title: "Fullstack Engineer",
      logo: JojoMobileLogo,
      start: "2016",
      end: "2018",
      description:
        "Created ETL services daily to gather data on all financial lease and loan offers in the country for all cars. Create financial software for dealership including Mazda, Volvo, Hyundai, Porsche.",
    },
    {
      company: "Yellow Pages Next Home",
      link: "https://www.nexthome.ca",
      badges: ["Toronto"],
      title: "Backend Engineer",
      logo: NSNLogo,
      start: "2016",
      end: "2014",
      description: "Built a secure RESTful API using .NET with spatial data for real estate listings. Deployed an ETL solution to integrate over 200,000 resale and rental listings daily. Automate services for email templating and daily statisitcal reporting.",
    },
  ],
  skills: [
    "Android",
    "Java",
    "Kotlin",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "SQL",
    "GO",
  ],
  projects: [
    {
      title: "Verdict MMA - Web",
      techStack: [
        "Production",
        "TypeScript",
        "Next.js",
        "React",
      ],
      description: "A platform for MMA fans to share their predictions, score rounds and compete with friends",
      logo: ConsultlyLogo,
      link: {
        label: "verdictmma.com",
        href: "https://verdictmma.com/",
      },
    },
    {
      title: "Verdict MMA - Android App",
      techStack: ["Production", "Kotlin", "Coroutines", "CI/CD"],
      description:
        "Android app of Verdict MMA, a platform for MMA fans to share their predictions, score rounds and compete with friends",
      logo: JarockiMeLogo,
      link: {
        label: "verdictmma.com",
        href: "https://play.google.com/store/apps/details?id=com.verdictmma.verdict&hl=en_CA&gl=US&pli=1",
      },
    },
    {
      title: "Fantasy Football My Playbook - Android App",
      techStack: ["Production", "Kotlin", "RxJava", "Mockito"],
      description:
        "My Playbook is a suite of powerful tools to help you make better decisions, and win your Fantasy Football leagues!",
      logo: Minimal,
      link: {
        label: "My Playbook",
        href: "https://play.google.com/store/apps/details?id=com.fantasypros.myplaybook&hl=en_CA&gl=US",
      },
    },
    {
      title: "Fantasy Baseball My Playbook - Android App",
      techStack: ["Production", "Kotlin"],
      description:
        "My Playbook is a suite of powerful tools to help you make better decisions, and win your Fantasy Baseball leagues!",
      logo: BarepapersLogo,
      link: {
        label: "My Playbook Baseball",
        href: "https://play.google.com/store/apps/details?id=com.fantasypros.myplaybook.baseball&hl=en_CA&gl=US",
      },
    },
  ],
} as const;
