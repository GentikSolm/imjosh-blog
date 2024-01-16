import fsPromises from "fs/promises";
import matter from "gray-matter";
import path from "path";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

function capitalize(s: string) {
  return s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  const filepath = path.join(process.cwd(), "src", "posts");
  return await fsPromises.readdir(filepath, { withFileTypes: false });
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: capitalize(params.slug.replaceAll("-", " ")),
    description: "An article by Josh",
  };
}

const toMarkdown = (md: string) => {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .processSync(md).value;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const filepath = path.join(
    process.cwd(),
    "src",
    "posts",
    params.slug + ".md",
  );
  const file = await fsPromises.readFile(filepath, "utf8");
  const data = matter(file);
  return (
    <div className="prose dark:prose-invert">
      <h1 className="mb-0">{capitalize(params.slug.replaceAll("-", " "))}</h1>
      <span>
        Posted{" "}
        {new Date(data.data.posted as string).toLocaleString().split(",")[0]}
      </span>
      <div dangerouslySetInnerHTML={{ __html: toMarkdown(data.content) }}></div>
      <hr />
    </div>
  );
}
