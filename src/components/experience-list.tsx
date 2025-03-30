"use client";
import { Fragment } from "react";

import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const experiences = [
  {
    company: "HABSNS Inc.",
    role: "Top Talent Software Engineer",
    start: "apr 2024",
    end: "mar 2025",
    duties: [
      "Develop and deploy a fintech application using a full stack of Python, Django, React.js, and PostgreSQL.",
      "Design and implement user interfaces with React.js, Next.js, and Bootstrap, enhancing UX and visual appeal.",
      "Engineer RESTful APIs using Django Rest Framework, optimizing system performance and scalability.",
      "Lead database design and optimization efforts, resulting in improved data handling and reduced query time.",
      "Integrate WhatsApp API to enhance user communication and engagement within the application.",
      "Streamline containerization and deployment using Docker and Git, ensuring consistent builds and version control.",
      "Conduct end-to-end testing to ensure product reliability and meet quality standards.",
      "Collaborate with cross-functional teams to align product functionality with business objectives.",
    ],
  },
  {
    company: "kicstoms sneakers ltd",
    role: "Co-Founder & Lead Full stack engineer",
    start: "jun 2020",
    end: "apr 2024",
    duties: [
      "Implemented Algolia for e-commerce search functionality.",
      "Designed Kicstoms web applications using Figma.",
      "Led a team to conceive and craft Kicstoms web applications using modern full-stack technologies: Next.js, ReactJS, TypeScript, CSS3, Python, Django, Django Rest Framework, and PostgreSQL API for the backend.",
      "Automated testing to ensure the quality of applications and validate the performance, security, and responsiveness of web applications using Jest, Cypress, Pytest, and Selenium.",
      "Automated deployment and ensured continuous integration using Docker and Kubernetes on Heroku and AWS.",
      "Utilized Git and GitHub for collaboration.",
      "Utilized Jira and GitHub Projects for project management.",
    ],
  },
  {
    company: "golive interactive ltd",
    role: "fullstack software engineer",
    start: "feb 2020",
    end: "may 2020",
    duties: [
      "Contributed to design concepts through Figma.",
      "Integrated content management systems such as Sanity, Wagtail, and WordPress to ensure content updates for clients’ websites.",
      "Collaborated with team members to develop custom CMS solutions based on clients's needs, using Python and Django.",
      "Collaborated with team members to design and implement visually appealing web applications, utilizing modern frontend technologies such as React.js, TypeScript, and Bootstrap CSS.",
    ],
  },
  {
    company: "african organization for standardization (ARSO)",
    role: "software engineer intern",
    start: "sep 2019",
    end: "dec 2019",
    duties: [
      "Collaborated with the team to maintain the organization’s website and web resources using Git.",
      "Developed features for the organization’s website in Node.js.",
      "Implemented bug tracking and reporting procedures through Jira and applied fixes.",
    ],
  },
];

export default function Experience() {
  return (
    <Tab.Group vertical>
      <div className="flex flex-col lg:flex-row gap-5 w-full grow-0">
        <Tab.List className="basis-full lg:basis-1/4 lg:grow-0 lg:shrink-0 flex flex-row lg:flex-col">
          {experiences.map((experience, index) => (
            <Tab key={index} as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "capitalize py-3.5 px-2 lg:px-7 lg:py-4 hover:bg-background-200 outline-none text-start w-full transition-all duration-500 ease-in-out",
                    {
                      "text-foreground border-b-4  border-l-0 lg:border-b-0 lg:border-l-4 border-foreground":
                        selected,
                      "border-b-0.5 border-l-0 lg:border-b-0 lg:border-l-0.5 border-light-300":
                        !selected,
                    }
                  )}
                >
                  {experience.company}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="basis-full lg:basis-3/4 shrink-0">
          {experiences.map((experience) => (
            <Tab.Panel key={experience.company}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl lg:text-[28px] capitalize">
                    <span className="text-light-100">{experience.role}</span>
                    <span className="text-foreground">
                      {" "}
                      @ {experience.company}.
                    </span>
                  </h3>
                  <small className="text-light-200 capitalize">
                    {experience.start} - {experience.end}
                  </small>
                </div>
                {experience.duties.map((duty, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <ChevronRightIcon className="w-4 h-4 text-foreground" />
                    <p className="normal">{duty}</p>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}
