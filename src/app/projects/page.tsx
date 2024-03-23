import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-white font-bold text-[40px] capitalize">
        all projects
      </h1>
      <table className="table-auto border-spacing-x-4">
        <thead>
          <tr>
            <th className="text-start text-lg">Year</th>
            <th className="text-start text-lg">Title</th>
            <th className="text-start text-lg">Made with</th>
            <th className="text-start text-lg">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="group">
              <td className="text-foreground text-start py-4 group-hover:background-200">
                {project.year}
              </td>
              <td className="text-white font-semibold text-start capitalize py-4 group-hover:background-200">
                {project.name}
              </td>
              <td className="py-4 flex gap-2 flex-wrap w-96 group-hover:background-200">
                {project.stack.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-2.5 bg-background-secondary text-foreground text-sm capitalize font-medium rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </td>
              <td className="text-start py-4 group-hover:background-200">
                {project.link && (
                  <Link
                    target="_blank"
                    href={project.link}
                    className="hover:text-foreground"
                  >
                    {project.link}
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
