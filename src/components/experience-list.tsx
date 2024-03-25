"use client";
import { Fragment } from "react";

import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const experiences = [
  {
    company: "kicstoms sneakers ltd",
    role: "lead engineer",
    start: "jun 2020",
    end: "oct 2023",
    duties: [
      "Conceived and crafted visually appealing, user-centric Kicstoms web applications",
      "Translated design blueprints into functional websites with seamless interactivity",
      "Executed comprehensive testing procedures to validate performance, security, and responsiveness of the web applications",
      "Undertook routine maintenance tasks and promptly addressed any technical issues for sustained website functionality",
      "Implemented updates and enhancements to Kicstoms web applications in response to evolving requirements",
      "Focused on optimizing website features to ensure an enhanced and technically proficient user experience",
    ],
  },
  {
    company: "golive interactive ltd",
    role: "web developer",
    start: "feb 2020",
    end: "may 2020",
    duties: [
      "Developed and oversaw WordPress web applications for clients, ensuring they stayed online, content remained current, and performance stayed reliable",
      "Crafted and maintained WordPress-based web applications, guaranteeing consistent uptime, regular content updates, and optimal performance for clients",
      "Specialized in creating and managing WordPress web applications, with a focus on maintaining uptime, updating content, and ensuring reliable performance",
      "Took charge of designing and handling WordPress web apps, prioritizing uptime, content freshness, and steady performance for clients",
      "Managed the entire lifecycle of WordPress web applications, emphasizing continuous uptime, timely content updates, and reliable performance",
      "Created and maintained WordPress-based web applications for clients, with a dedicated commitment to sustained uptime, content currency, and dependable performance",
    ],
  },
  {
    company: "african organization for standardization (ARSO)",
    role: "IT intern",
    start: "sep 2019",
    end: "dec 2019",
    duties: [
      "Oversaw and managed a range of ICT equipment within the ARSO DISNET and IT framework",
      "Administered servers and workstations to ensure seamless functionality and performance",
      "Coordinated and executed updates for IT software, ensuring systems were current and secure",
      "Played a pivotal role in maintaining and troubleshooting various components of the IT infrastructure",
      "Facilitated website updates to keep content relevant and ensure optimal user experience",
      "Collaborated with teams to implement IT solutions and enhance overall efficiency within the organization",
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
                    "capitalize py-3.5 px-2 lg:px-7 lg:py-4 hover:bg-background-200 outline-none text-start w-full",
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
          {experiences.map((experience, index) => (
            <Tab.Panel key={index}>
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
