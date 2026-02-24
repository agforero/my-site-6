import { StepListItem } from "@/components/StepList";
import Image from "next/image";

export const education: StepListItem[] = [
  {
    label: "Cornell University",
    description:
      "MEng in Computer Science. Simons Graduate Scholarship recipient. Attended Cornell Tech, the technology-focused graduate campus of Cornell University in New York City.",
    date: "2021 - 2022",
    icon: (
      <Image
        src="/cornell.svg"
        width={24}
        height={24}
        alt="Cornell University logo"
      />
    ),
  },
  {
    label: "St. Olaf College",
    description:
      "BA in Computer Science and History. Open Door Scholarship recipient.",
    date: "2017 - 2021",
    icon: (
      <Image
        src="/stolaf.svg"
        width={24}
        height={24}
        alt="St. Olaf College logo"
      />
    ),
  },
];

export const workExperience: StepListItem[] = [
  {
    label: "SBG Funding",
    description:
      "Software engineer at SBG Funding, a fintech company specializing in small business loans.",
    date: "Feb 2026 - Present",
  },
  {
    label: "ClearBlade",
    description:
      "As a Software Engineer on the Apps Team at ClearBlade, I developed end-to-end application functionality using TypeScript across both the front end and back end, working with React and Material UI on the UI side and services running on ClearBlade Intelligent Assets on the backend. I was responsible for ensuring reliable communication between the user interface and edge/runtime components. I architected and delivered a full-stack measurement profile system that allowed users to view metrics in units aligned with their preferences, implementing both the UI controls and backend logic to automatically convert and standardize values across the application. I also introduced dynamic page configuration, enabling users to control page visibility, ordering, and custom page creation across Intelligent Assets. In addition, I implemented the Ops Console, a self-service interface that lets customers provision and manage multiple Intelligent Assets instances across environments, significantly reducing reliance on the Services team and providing a more cloud-like management experience.",
    date: "Jan 2025 - Jan 2026",
  },
  {
    label: "Abstractive Health",
    description:
      "As a Founding Software Engineer at Abstractive Health, I played a key role in shaping both the technical direction and broader business strategy of the company as one of its first six employees. I contributed directly to foundational decisions that supported the company's early growth, including work that led to a pilot with NewYork-Presbyterian Hospital, one of the largest hospital systems in New York City. I built and maintained the core platform as one of two full-stack engineers, working across TypeScript, Python 3, and PostgreSQL to deliver production-grade front-end and back-end systems. My work spanned everything from application architecture to day-to-day feature development, with a strong focus on reliability, scalability, and shipping quickly in a startup environment.",
    date: "Sep 2023 - Jan 2025",
  },
  {
    label: "InterSystems",
    description:
      "As a Release Engineer at InterSystems, I developed front-end and back-end tooling to streamline the rapid deployment of development environments across multiple internal teams, improving developer productivity and consistency. I also maintained FAST (Framework for Automation and Self-Service Testing), a company-wide unit testing framework that supported thousands of tests per day. Through this work, I helped ensure the stability and reliability of internal development workflows while enabling teams to move faster with greater confidence in their releases.",
    date: "Jul 2022 - Sep 2023",
  },
];
