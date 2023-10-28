import fsPromises from "fs/promises";
import matter from "gray-matter";
import { micromark } from "micromark";

function capitalize(s: string) {
  return s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  return await fsPromises.readdir("src/posts", { withFileTypes: false });
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: capitalize(params.slug.replace("-", " ")),
    description: "An article by Josh",
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const file = await fsPromises.readFile(`src/posts/${params.slug}.md`, "utf8");
  const data = matter(file);
  return (
    <div className="prose dark:prose-invert">
      <h1 className='mb-0'>{capitalize(params.slug.replace("-", " "))}</h1>
      <span>Posted {new Date(data.data.posted as string).toLocaleString().split(',')[0]}</span>
      <div dangerouslySetInnerHTML={{ __html: micromark(data.content) }}></div>
      <hr/>
    </div>
  );
}
