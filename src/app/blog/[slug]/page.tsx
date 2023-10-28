import fsPromises from "fs/promises";
import matter from "gray-matter";
import { micromark } from "micromark";

export async function generateStaticParams() {
  return await fsPromises.readdir("src/posts", { withFileTypes: false });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const file = await fsPromises.readFile(`src/posts/${params.slug}.md`, "utf8");
  const data = matter(file);
  return (
    <div
      className="prose dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: micromark(data.content) }}
    ></div>
  );
}
