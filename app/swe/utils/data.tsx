import { StepListItem } from "@/components/StepList";
import { Avatar } from "@mui/material";
import Image from "next/image";

export const sweSummary: string =
  "I am a Software Engineer at SBG Funding. I have ample experience working in the startup space. On the front-end, I specialize in TypeScript and React, while on the back-end, I have extensive experience with AWS, Python and Terraform. I am passionate about taking products from 0 to 100, from initial ideation to full-stack implementation and everything in between.\n\nI have also been teaching computer science for several years, both as a teaching assistant for university courses and through private tutoring. I enjoy helping others learn and grow in their understanding of software development, and I find that teaching often deepens my own understanding of the material as well.";

export const sweLanguagesAndTechnologies: string[] = [
  "TypeScript",
  "React",
  "AWS",
  "Python",
  "PostgreSQL",
  "Terraform",
  "Bash",
  "Docker",
  "Material UI",
  "Bootstrap",
];

export const sweEducation: StepListItem[] = [
  {
    label: "Cornell University",
    description:
      "MEng in Computer Science. Attended Cornell Tech, the technology-focused graduate campus of Cornell University in New York City.",
    startDate: new Date(2021, 7),
    endDate: new Date(2022, 5),
    icon: (
      <Avatar sx={{ height: 24, width: 24 }}>
        <Image
          src="/cornell.svg"
          width={22}
          height={22}
          alt="Cornell University logo"
        />
      </Avatar>
    ),
  },
  {
    label: "St. Olaf College",
    description: "BA in Computer Science and History.",
    startDate: new Date(2017, 7),
    endDate: new Date(2021, 5),
    icon: (
      <Avatar sx={{ height: 24, width: 24 }}>
        <Image
          src="/stolaf.svg"
          width={22}
          height={22}
          alt="St. Olaf College logo"
        />
      </Avatar>
    ),
  },
];

export const sweWorkExperience: StepListItem[] = [
  {
    label: "SBG Funding",
    description:
      "I am currently a Software Engineer at SBG Funding, a fintech company specializing in small business loans.",
    startDate: new Date(2026, 1),
  },
  {
    label: "Inspirit AI (Part-time)",
    description:
      "At Inspirit AI, I've work part-time as an Instructor, Curriculum Manager, Program Manager and Mentor. In these roles, I've taught high schoolers the basics of machine learning, developed and maintained curriculum for multiple courses, managed other Instructors, and mentored students through the creation of their own machine learning research papers.",
    startDate: new Date(2021, 5),
  },
  {
    label: "ClearBlade",
    description:
      "As a Software Engineer on the Apps Team at ClearBlade, I developed end-to-end application functionality using TypeScript across both the front-end and back-end, working with React and Material UI on the UI side and services running on ClearBlade Intelligent Assets on the backend. I was responsible for ensuring reliable communication between the user interface and edge/runtime components. I architected and delivered a full-stack measurement profile system that allowed users to view metrics in units aligned with their preferences, implementing both the UI controls and backend logic to automatically convert and standardize values across the application. I also introduced dynamic page configuration, enabling users to control page visibility, ordering, and custom page creation across Intelligent Assets. In addition, I implemented the Ops Console, a self-service interface that lets customers provision and manage multiple Intelligent Assets instances across environments, significantly reducing reliance on the Services team and providing a more cloud-like management experience.",
    startDate: new Date(2025, 0),
    endDate: new Date(2026, 0),
  },
  {
    label: "Abstractive Health",
    description:
      "As a Founding Software Engineer at Abstractive Health, I played a key role in shaping both the technical direction and broader business strategy of the company as one of its first six employees. I contributed directly to foundational decisions that supported the company's early growth, including work that led to a pilot with NewYork-Presbyterian Hospital, one of the largest hospital systems in New York City. I built and maintained the core platform as one of two full-stack engineers, working across TypeScript, Python 3, and PostgreSQL to deliver production-grade front-end and back-end systems. My work spanned everything from application architecture to day-to-day feature development, with a strong focus on reliability, scalability, and shipping quickly in a startup environment.",
    startDate: new Date(2023, 8),
    endDate: new Date(2025, 0),
  },
  {
    label: "InterSystems",
    description:
      "As a Release Engineer at InterSystems, I developed front-end and back-end tooling to streamline the rapid deployment of development environments across multiple internal teams, improving developer productivity and consistency. I also maintained FAST (Framework for Automation and Self-Service Testing), a company-wide unit testing framework that supported thousands of tests per day. Through this work, I helped ensure the stability and reliability of internal development workflows while enabling teams to move faster with greater confidence in their releases.",
    startDate: new Date(2022, 6, 11, 8),
    endDate: new Date(2023, 8),
  },
];
