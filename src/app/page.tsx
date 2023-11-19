export default function Page() {
  return (
    <div className="prose dark:prose-invert">
      <h1 className="">
        Hey there! <br className="sm:hidden" /> I{"'"}m josh.
      </h1>
      <div className="max-w-2xl">
        <p>
          I{"'"}m a software engineer based out of Austin TX, currently CTO at{" "}
          <a href="https://manifold.inc" className="hover:underline">
            Manifold Labs
          </a>
          . We design incentive mechanisms for running distributed inference at
          scale, along with some other cool projects when we are inspired. Some
          of the projects I{"'"}ve worked on at manifold include{" "}
          <a href="https://github.com/manifold-inc/targon">Subnet 4</a>,{" "}
          <a href="https://targon.com/">Targon Hub</a>,{" "}
          <a href="https://sybil.com/">Sybil</a>, and designing{" "}
          <a href="https://epistula.sybil.com/">the Epistula Protocol</a>.
        </p>
        <h3>Past Work</h3>
        <p>
          From mid 2022 to early 2024 I was proudly the CTO at{" "}
          <a href="https://biblish.com">Biblish</a>, where we built the home of
          literature for the 21st century. During my time at Biblish we launched{" "}
          <a href="https://papertrail.biblish.com">Papertrail</a> and{" "}
          <a href="https://submissions.biblish.com">Submissions</a>.
        </p>
        <p>
          In 2023 I formed my own LLC called{" "}
          <a href="https://brunuslabs.com">Brunus Labs</a> to take on contract
          work. During my time at Brunus
          <sup>
            <a href="#footnote-1" className="pb-1 text-xs no-underline">
              [1]
            </a>
          </sup>{" "}
          we built internal time tracking applications, lightweight POS systems,
          discord bots, Marketing sites and more.
        </p>
        <p>
          Before Brunus Labs I was a Web and Application Developer at Cleveland
          Clinic. I created multiple web applications and moved all of our teams
          projects from TFVC to git (that wasn{"'"}t fun) amongst other things.
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
        <h3>What I{"'"}m about</h3>
        <p>
          I love motivating people to build cool stuff, and encourage people to
          never stop learning. I like giving talks to classes at universities,
          and being involved in the tech community. If your interested in having
          me talk at your university or other event, shoot me an{" "}
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
