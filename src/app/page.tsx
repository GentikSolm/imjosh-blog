export default function Page() {
  return (
    <div className="prose dark:prose-invert">
      <h1 className="">
        Hey there! <br className="sm:hidden" /> Im josh.
      </h1>
      <div className="max-w-2xl">
        <p>
          Im a software engineer based out of Austin TX. I am currently the
          Software Lead at{" "}
          <a href="https://manifold.inc" className="hover:underline">
            Manifold Labs
          </a>
          , where we are building the future of search Check our current
          project, <a href="https://sybil.com">Sybil</a>!
        </p>
        <h3>Past Work</h3>
        <p>
          From mid 2022 to 2024 I was proudly the CTO at{" "}
          <a href="https://biblish.com">Biblish</a>, where we built the home of
          literature for the 21st century. During my time at biblish we launched{" "}
          <a href="https://papertrail.biblish.com">Papertrail</a> and{" "}
          <a href="https://submissions.biblish.com">Submissions</a>.
        </p>
        <p>
          In 2023 I formed my own LLC called{" "}
          <a href="https://brunuslabs.com">Brunus Labs</a> to take on contract
          work. Since I started Brunus we
          <sup>
            <a href="#footnote-1" className="pb-1 text-xs no-underline">
              [1]
            </a>
          </sup>{" "}
          have built from internal time tracking applications, lightweight POS
          systems, all the way to discord bots and Marketing sites.
        </p>
        <p>
          Before Brunus Labs I was a Web and Application Developer at Cleveland
          Clinic. I created multiple web applications, one of which to this day
          saves the clinic more than 30k per year in licencing fees. I also
          moved all of our teams projects from TFVC to git, along with being the
          first to introduce and setup CICD, inclduing automatic deployments,
          concurrent builds, code linting, and more.
        </p>
        <p id="footnote-1" className="text-sm">
          [1]: I was able to hire 3 of my friends under Brunus Labs during
          college. Matt, Ahmed and Will helped tremendously in not only building
          Brunus Labs but also helping me become the developer I am today.
        </p>
        <h3>Personal Background</h3>
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
            <a href="https://uakron.edu">University of Akron</a>, where I
            achieved
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
          and being involived in the tech community. If your interested in
          having me talk at your univeristy or other event, shoot me an{" "}
          <a href="mailto:hey@imjosh.dev">email</a>!
        </p>
        <p>
          I also love helping out with open source projects where I can. You can
          find some of my contributions in{" "}
          <a href="https://github.com/pingdotgg/uploadthing">uploadthing</a>
          {" and "}
          <a href="https://github.com/mdx-editor/editor">MDX Editor</a>.
        </p>
        <p>
          Outside of technology, I really love longboarding, working out, and
          spending time with my friends & meeting new people along the way.
        </p>
      </div>
    </div>
  );
}
