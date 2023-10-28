import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="prose dark:prose-invert">
      <h1 className="">
        Hey there! <br className="sm:hidden" /> Im josh.
      </h1>
      <div className="max-w-2xl">
        <p>
          Im a software engineer based out of Austin TX and currently CTO at{" "}
          <a
            href="https://biblish.com"
            className="hover:underline"
          >
            Biblish
          </a>
          , where we are building a home for literature in the 21st century.
          Check our current project,{" "}
          <a
            href="https://papertrail.biblish.com"
          >
            Papertrail
          </a>
          !
        </p>
        <h3 >A bit of background</h3>
        <p>
          Born and raised in Ohio, I always loved computers and technology. I
          first was introduced to programming in 6th grade where I started
          writing DOS shell scripts on my schools computers. I got introduced to
          python the following year where I found my love for programming and
          solving interesting problems.
        </p>
        <div>
          <p>
            I went on to attended the{" "}
            <a
              href="https://uakron.edu"
            >
              University of Akron
            </a>
            , where I achieved
          </p>
          <ul>
            <li> Bachelors of Applied Mathematics</li>
            <li> Bachelors of Computer Science</li>
            <li> Minor in Statistics</li>
            <li> Minor in Business Administration</li>
          </ul>
        </div>
        <h3>What im about</h3>
        <p>
          I love motivating people to build cool stuff, and encourage people to
          never stop learning. I like giving talks to classes at universities,
          and being involived in the tech community.
        </p>
        <p>
          I also love helping out with open source projects where I can. You can
          find some of my contributions in{" "}
          <a
            href="https://github.com/pingdotgg/uploadthing"
          >
            uploadthing
          </a>
          {" and "}
          <a
            href="https://github.com/mdx-editor/editor"
          >
            MDX Editor
          </a>
          .
        </p>
        <p>
          Outside of technology, I really love longboarding, working out, and
          spending time with my friends & meeting new people along the way.
        </p>
        <h3>Contact me</h3>
        <div className="flex gap-3">
          <a
            className="transition-all hover:text-orange-600 dark:hover:text-orange-500"
            href="mailto:hey@imjosh.dev"
          >
            <MailIcon />
          </a>
          <a
            className="transition-all hover:text-orange-600 dark:hover:text-orange-500"
            href="https://github.com/gentiksolm"
          >
            <GithubIcon />
          </a>
          <a
            className="transition-all hover:text-orange-600 dark:hover:text-orange-500"
            href="https://www.linkedin.com/in/joshgbrown/"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
