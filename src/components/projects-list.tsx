import Image from "next/image";

import { projects } from "@/lib/projects";

export default function ProjectsList() {
  const projectsShowcase = projects.slice(0, 4);
  return (
    <div className="flex flex-col gap-8 lg:gap-32">
      {projectsShowcase.map((project, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row gap-5 items-start w-full p-4 lg:p-0 rounded-lg lg:rounded-none bg-background-200 lg:bg-transparent"
        >
          {index % 2 === 0 ? (
            <>
              <div className="hidden lg:flex basis-full lg:basis-7/12 grow-0">
                <Image
                  src={project.imageUrl}
                  width={1000}
                  height={1000}
                  alt={`${project.name}`}
                  className="w-full grow-0 rounded-lg"
                />
              </div>
              <div className="basis-5/12 flex flex-col gap-5 items-start lg:items-end text-start lg:text-end">
                <div className="space-y-2">
                  <h4 className="text-foreground capitalize text-sm font-medium">
                    featured project
                  </h4>
                  <h3 className="text-light-100 text-xl lg:text-[28px] font-semibold capitalize">
                    {project.name}
                  </h3>
                </div>
                <p className="lg:p-3 bg-background-200 rounded-lg">
                  {project.description}
                </p>
                <div className="flex gap-2 justify-start lg:justify-end lg:w-2/3 flex-wrap">
                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-2.5 bg-background-secondary text-foreground text-sm capitalize font-medium rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    target="_blank"
                    href={project.link}
                    className="flex gap-2 items-center group"
                  >
                    <span className="group-hover:text-foreground">{project.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="fill-light-300 group-hover:fill-foreground"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="basis-full lg:basis-5/12 flex flex-col gap-5 items-start">
                <div className="space-y-2">
                  <h4 className="text-foreground capitalize text-sm font-medium">
                    featured project
                  </h4>
                  <h3 className="text-light-100 text-xl lg:text-[28px] font-semibold capitalize">
                    {project.name}
                  </h3>
                </div>
                <p className="lg:p-3 bg-background-200 rounded-lg">
                  {project.description}
                </p>
                <div className="flex gap-2 justify-start lg:w-2/3 flex-wrap">
                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-2.5 bg-background-secondary text-foreground text-sm capitalize font-medium rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    target="_blank"
                    href={project.link}
                    className="flex gap-2 items-center group"
                  >
                    <span className="group-hover:text-foreground">
                      {project.name}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="32"
                      className="fill-light-300 group-hover:fill-foreground"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                    </svg>
                  </a>
                )}
              </div>
              <div className="hidden lg:flex basis-full lg:basis-7/12 grow-0">
                <Image
                  src={project.imageUrl}
                  width={1000}
                  height={1000}
                  alt={`${project.name}`}
                  className="w-full grow-0 rounded-lg"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
