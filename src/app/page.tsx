import { DiscIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        <Image
          className="inline-block h-20 w-20 rounded-full"
          src="/me.jpg"
          alt=" "
          width={256}
          height={256}
        />
      </div>
      <div className="pt-3 text-5xl font-medium">
        Hey there! <br className="sm:hidden" /> Im josh.
      </div>
      <div className="max-w-2xl pt-5 text-gray-700">
        <div>
          Im a software engineer based out of Austin TX and currently CTO at{" "}
          <a
            href="https://biblish.com"
            className="text-blue-600 hover:underline"
          >
            Biblish
          </a>
          , where we are building a home for literature in the 21st century.
          Check our current project,{" "}
          <a
            href="https://papertrail.biblish.com"
            className="text-blue-600 hover:underline"
          >
            Papertrail
          </a>
          !
        </div>
        <h3 className="pt-5 text-2xl">A bit of background</h3>
        <div className="pt-2">
          Born and raised in Ohio, I always loved computers and technology. I
          first was introduced to programming in 6th grade where I started
          writing DOS shell scripts on my schools computers. I got introduced to
          python the following year where I found my love for programming and
          solving interesting problems.
        </div>
        <div className="pt-4">
          I went on to attended the{" "}
          <a
            href="https://uakron.edu"
            className="text-blue-600 hover:underline"
          >
            University of Akron
          </a>
          , where I studied
          <ul>
            <li>- Bachelors of Applied Mathematics</li>
            <li>- Bachelors of Computer Science</li>
            <li>- Minor in Statistics</li>
            <li>- Minor in Business Administration</li>
          </ul>
        </div>
        <h3 className="pt-5 text-2xl">What im about</h3>
        <div className="pt-2">
          I love motivating people to build cool stuff, and encourage people to
          never stop learning. I like giving talks to classes at universities,
          and being involived in the tech community.
        </div>
        <div className="pt-4">
          I also love helping out with open source projects where I can. You can
          find some of my contributions in{" "}
          <a
            href="https://github.com/pingdotgg/uploadthing"
            className="text-blue-600 hover:underline"
          >
            uploadthing
          </a>
          {" and "}
          <a
            href="https://github.com/mdx-editor/editor"
            className="text-blue-600 hover:underline"
          >
            MDX Editor
          </a>
          .
        </div>
        <div className="pt-4">
          Outside of technology, I really love longboarding, working out, and
          spending time with my friends & meeting new people along the way.
        </div>
        <h3 className="pt-5 text-2xl">Contact me</h3>
        <div className="flex gap-3 pt-3">
          <a
            className="transition-all hover:text-orange-600"
            href="mailto:hey@imjosh.dev"
          >
            <MailIcon />
          </a>
          <a
            className="transition-all hover:text-orange-600"
            href="https://github.com/gentiksolm"
          >
            <GithubIcon />
          </a>
          <a
            className="transition-all hover:text-orange-600"
            href="https://www.linkedin.com/in/joshgbrown/"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </>
  );
}
