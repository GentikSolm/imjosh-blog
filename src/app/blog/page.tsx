import fsPromises from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

export default async function Page() {
  const filepath = path.join(process.cwd(), "src", "posts");
  const posts = await fsPromises.readdir(filepath, { withFileTypes: false });
  const orderedPosts = posts
    .map((f) => {
      const d = matter.read(`src/posts/${f}`);
      return { data: d.data, slug: f.slice(0, -3) };
    })
    .sort(
      (a, b) =>
        new Date((b.data.posted as string) ?? "").getTime() -
        new Date((a.data.posted as string) ?? "").getTime(),
    );
  return (
    <div className="prose dark:prose-invert">
      <h1>Posts</h1>
      <ul>
        {orderedPosts.map((p) => (
          <li className="text-xl capitalize" key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="no-underline hover:underline"
            >
              {p.slug.replaceAll("-", " ")}
            </Link>
            <span className="pl-4 text-base">
              {(p.data.posted as Date).toLocaleString().split(",")[0]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
