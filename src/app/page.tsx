import Image from "next/image";
import CallToAction from "@/components/call-to-action";
import { Montserrat } from "next/font/google";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import Experience from "@/components/experience-list";
import ProjectsList from "@/components/projects-list";
import ServicesList from "@/components/services-list";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* the hero section */}
      {/* occupies min-device heigt */}
      <div className="min-h-screen h-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-12 w-full items-start">
          <div className="flex flex-col gap-5">
            <h6 className="text-foreground">Hi, my name is</h6>
            <div className="font-bold">
              <h1 className="text-light-100 text-[64px] capitalize leading-tight">
                richard iradukunda.
              </h1>
              <h2 className="text-light-20 text-[64px] leading-tight">
                I engineer full-stack solutions.
              </h2>
            </div>
            <p className="w-full lg:w-1/2">
              As a seasoned Full Stack Web Developer, I, a digital nomad
              currently residing in Montreal, Canada, bring over four years of
              expertise in web app development. I am committed to empowering
              individuals and businesses by creating impactful platforms,
              applications, and sites that enhance customer value and contribute
              to their success.
            </p>
          </div>
          <CallToAction text="Work with me" />
        </div>
      </div>
      <div id="about">
        <div className="flex flex-col gap-12 items-start">
          <div className="flex gap-4 items-center w-1/2">
            <h1 className="text-[40px] font-bold space-x-3 shrink-0">
              <span className={`${montserrat.className} text-foreground`}>
                01.
              </span>
              <span className="text-light-100 capitalize">about me</span>
            </h1>
            <hr className="bg-light-300 w-full" />
          </div>
          <div className="flex lg:gap-28 items-start">
            <div className="flex flex-col gap-6 items-start grow">
              <p>
                Greetings! I'm Richard Dushime Iradukunda, a full-stack web
                developer happily calling Montreal, Canada, my home. My journey
                into the world of programming began in 2015 during the final
                stretch of high school. It all started with visual basic, and I
                found myself captivated by the art of crafting simple programs.
              </p>
              <p>
                I kicked off my career as a backend engineer, relishing the
                intricacies of server-side magic. Yet, as any seasoned chef
                knows, a delightful dish is not just about the recipe—it's also
                about the presentation. So, I ventured into frontend realms,
                mastering both the art of design and the craft of development.
              </p>
              <p>
                Presently, I'm dancing in the freelance arena as a full-stack
                sorcerer, conjuring digital wonders for clients on UpWork. Join
                me on this coding adventure, where we turn ideas into
                interactive experiences!
              </p>
              <p>Here are some of the technologies I have been working with:</p>
              <div className="flex gap-12">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    Python
                  </div>
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    JavaScript
                  </div>
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    ReactJS 17+
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    Django
                  </div>
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    TypeScript
                  </div>
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    Next.js
                  </div>
                </div>
              </div>
            </div>
            {/* the image */}
            <Image
              src="/hero-image.jpg"
              width={320}
              height={320}
              alt="hero image"
              className="shadow-3xl grow-0 shrink-0 rounded-lg"
            />
          </div>
          <div id="experience" className="flex w-full justify-end">
            <div className="flex flex-col basis-full items-start lg:basis-5/6 gap-y-12">
              <div className="flex gap-4 items-center w-full">
                <h2 className="text-[32px] font-bold space-x-3 shrink-0">
                  <span className={`${montserrat.className} text-foreground`}>
                    02.
                  </span>
                  <span className="text-light-100 capitalize">
                    where i've worked
                  </span>
                </h2>
                <hr className="bg-light-300 w-full" />
              </div>
              <Experience />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-24 items-start mt-60">
        {/* projects */}
        <div id="work" className="flex flex-col gap-12 w-full">
          <div className="flex gap-4 items-center w-full">
            <h1 className="text-[40px] font-bold space-x-3 shrink-0">
              <span className={`${montserrat.className} text-foreground`}>
                03.
              </span>
              <span className="text-light-100 capitalize">
                some of the things i've built
              </span>
            </h1>
            <hr className="bg-light-300 w-full" />
          </div>
          <ProjectsList />
          <div className="self-center">
            <CallToAction text="View all projects" />
          </div>
        </div>
        {/* services */}
        <div id="services" className="w-full">
          <div id="work" className="flex flex-col gap-12 w-full">
            <div className="flex gap-4 items-center w-full">
              <h1 className="text-[40px] font-bold space-x-3 shrink-0">
                <span className={`${montserrat.className} text-foreground`}>
                  04.
                </span>
                <span className="text-light-100 capitalize">
                  what i can do for you
                </span>
              </h1>
              <hr className="bg-light-300 w-full" />
            </div>
            <ServicesList />
          </div>
        </div>
        {/* testimonials */}
        <div id="testimonials" className="w-full">
          <div id="work" className="flex flex-col gap-12 w-full">
            <div className="flex gap-4 items-center w-full">
              <h1 className="text-[40px] font-bold space-x-3 shrink-0">
                <span className={`${montserrat.className} text-foreground`}>
                  05.
                </span>
                <span className="text-light-100 capitalize">
                  what clients have said about me
                </span>
              </h1>
              <hr className="bg-light-300 w-full" />
            </div>
          </div>
        </div>
        {/* get in touch */}
        <div id="get-in-touch" className="w-full">
          <div id="work" className="flex flex-col gap-12 w-full">
            <div className="flex gap-4 items-center w-full">
              <h1 className="text-[40px] font-bold space-x-3 shrink-0">
                <span className={`${montserrat.className} text-foreground`}>
                  06.
                </span>
                <span className="text-light-100 capitalize">
                  get in touch with me
                </span>
              </h1>
              <hr className="bg-light-300 w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
