"use client";
import {
  BezierCurve,
  Code,
  Database,
  Headset,
  WebhooksLogo,
} from "@phosphor-icons/react";

const services = [
  {
    name: "custom web development",
    description:
      "Leveraging Python, Django, and ReactJs, I craft tailored web solutions that align with your business needs, ensuring scalability and performance.",
    icon: <Code size={32} weight="bold" color="#3FFA56" />,
  },
  {
    name: "API development & integration",
    description:
      "Specializing in API development using Django Rest Framework and Express.Js, I create robust APIs and seamlessly integrate them with third-party services or applications.",
    icon: <WebhooksLogo size={32} weight="bold" color="#3FFA56" />,
  },
  {
    name: "full-stack consulting",
    description:
      "Offering comprehensive guidance on web development projects, from backend architecture using Node.Js to frontend design with NextJs, ensuring best practices and optimal solutions.",
    icon: <Headset size={32} weight="bold" color="#3FFA56" />,
  },
  {
    name: "UI/UX design and optimization",
    description:
      "With a keen eye for design and user experience, I provide UI/UX design services, optimizing interfaces for usability and engagement, complemented by frontend technologies like TypeScript and Redux.",
    icon: <BezierCurve size={32} weight="bold" color="#3FFA56" />,
  },
  {
    name: "database development and optimzation",
    description:
      "Proficient in SQL and MongoDB, I offer database management services, including design, optimization, and migration, ensuring efficient data storage and retrieval for your applications.",
    icon: <Database size={32} weight="bold" color="#3FFA56" />,
  },
];

export default function ServicesList() {
  return (
    <div className="flex flex-wrap gap-5 w-full">
      {services.map((service, index) => (
        <div className="basis-1/4 grow bg-background-200 px-7 py-6 rounded-lg flex flex-col gap-y-9">
          <div className="flex items-start gap-4">
            {service.icon}
            <span className="text-light-200 capitalize font-bold text-[20px]">
              {service.name}
            </span>
          </div>
          <p className="text-light-300">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
