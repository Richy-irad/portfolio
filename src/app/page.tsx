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
      <div className="min-h-screen h-full flex flex-col items-center justify-center snap-center">
        <div className="flex flex-col gap-12 w-full items-start">
          <div className="flex flex-col gap-5">
            <h6 className="text-foreground">Hi, my name is</h6>
            <div className="font-bold">
              <h1 className="text-light-100 text-4xl lg:text-[64px] capitalize leading-tight">
                richard iradukunda.
              </h1>
              <h2 className="text-light-20 text-4xl lg:text-[64px] leading-tight">
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
          <CallToAction
            text="Work with me"
            href="mailto:iradukundadushime@gmail.com"
          />
        </div>
      </div>
      <div id="about" className="scroll-pt-8 snap-center">
        <div className="flex flex-col gap-8 lg:gap-12 items-start">
          <div className="flex gap-4 items-center w-1/2">
            <h1 className="text-2xl lg:text-[40px] font-bold space-x-3 shrink-0">
              <span className={`${montserrat.className} text-foreground`}>
                01.
              </span>
              <span className="text-light-100 capitalize">about me</span>
            </h1>
            <hr className="lg:bg-light-300 lg:w-64" />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-16 2xl:gap-28 items-start">
            <div className="flex flex-col gap-6 items-start grow">
              <p>
                Greetings! I&apos;m Richard Dushime Iradukunda, a full-stack web
                developer happily calling Montreal, Canada, my home. My journey
                into the world of programming began in 2015 during the final
                stretch of high school. It all started with visual basic, and I
                found myself captivated by the art of crafting simple programs.
              </p>
              <p>
                I kicked off my career as a backend engineer, relishing the
                intricacies of server-side magic. Yet, as any seasoned chef
                knows, a delightful dish is not just about the recipe—it&apos;s
                also about the presentation. So, I ventured into frontend
                realms, mastering both the art of design and the craft of
                development.
              </p>
              <p>
                Presently, I&apos;m dancing in the freelance arena as a
                full-stack sorcerer, conjuring digital wonders for clients on
                UpWork. Join me on this coding adventure, where we turn ideas
                into interactive experiences!
              </p>
              <p>Here are some of the technologies I have been working with:</p>
              <div className="flex gap-12 pb-4 lg:pb-0">
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
            <div className="h-80 w-80 grow-0 shrink-0">
              <Image
                src="/hero-image.jpg"
                width={1000}
                height={1000}
                alt="hero image"
                className="shadow-3xl rounded-lg h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div id="experience" className="flex w-full justify-end">
            <div className="flex flex-col items-start basis-full lg:basis-5/6 gap-y-6 lg:gap-y-12">
              <div className="flex gap-4 items-center w-full">
                <h2 className="text-xl lg:text-[32px] font-bold space-x-3 shrink-0">
                  <span className={`${montserrat.className} text-foreground`}>
                    02.
                  </span>
                  <span className="text-light-100 capitalize">
                    where i&apos;ve worked
                  </span>
                </h2>
                <hr className="lg:bg-light-300 lg:w-64" />
              </div>
              <Experience />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-24 items-start mt-16 lg:mt-60 scroll-pt-8 snap-start">
        {/* projects */}
        <div id="work" className="flex flex-col gap-12 w-full">
          <div className="flex gap-4 items-center w-full">
            <h1 className="text-2xl lg:text-[40px] font-bold space-x-3 shrink-0 w-full">
              <span className={`${montserrat.className} text-foreground`}>
                03.
              </span>
              <span className="text-light-100 capitalize">
                some of the things i&apos;ve built
              </span>
            </h1>
            <hr className="lg:bg-light-300 lg:w-64" />
          </div>
          <ProjectsList />
          <div className="self-center">
            <CallToAction text="View all projects" href="/projects" />
          </div>
        </div>
        {/* services */}
        <div id="services" className="w-full snap-center">
          <div id="work" className="flex flex-col gap-12 w-full">
            <div className="flex gap-4 items-center w-full">
              <h1 className="text-2xl lg:text-[40px] font-bold space-x-3 shrink-0">
                <span className={`${montserrat.className} text-foreground`}>
                  04.
                </span>
                <span className="text-light-100 capitalize">
                  what i can do for you
                </span>
              </h1>
              <hr className="lg:bg-light-300 lg:w-64" />
            </div>
            <ServicesList />
          </div>
        </div>
        {/* testimonials */}
        {/* <div id="testimonials" className="w-full">
          <div id="work" className="flex flex-col gap-12 w-full">
            <div className="flex gap-4 items-center w-full">
              <h1 className="text-2xl lg:text-[40px] font-bold space-x-3 shrink-0">
                <span className={`${montserrat.className} text-foreground`}>
                  05.
                </span>
                <span className="text-light-100 capitalize">
                  what clients have said about me
                </span>
              </h1>
              <hr className="lg:bg-light-300 lg:w-64" />
            </div>
          </div>
        </div> */}
        {/* get in touch */}
        <div id="get-in-touch" className="w-full snap-end">
          <div id="work" className="flex items-center flex-col gap-12 w-full">
            <div className="flex flex-col gap-4 items-center">
              <h6 className="text-foreground">05. What&apos;s next</h6>
              <h1 className="text-[40px] font-bold shrink-0 text-light-100 capitalize">
                get in touch
              </h1>
              <p className="lg:w-1/2 text-center">
                I warmly welcome any inquiries or communication from those
                seeking to connect. Please feel free to reach out at any time.
              </p>
            </div>
            <CallToAction
              text="Say Hello!"
              href="mailto:iradukundadushime@gmail.com"
            />
          </div>
        </div>
      </div>
    </>
  );
}
