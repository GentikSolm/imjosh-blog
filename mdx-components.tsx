import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import rehypeHighlight from "rehype-highlight";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
const options = {};
const withMDX = (await import("@next/mdx")).default({
  options: {
    rehypePlugins: [[rehypeHighlight(), options]],
  },
});
const { withAxiom } = await import("next-axiom");
export const MDXStyles = {
  img: ({ children, src, alt }) => (
    <Image
      alt={alt ?? ""}
      src={src ?? ""}
      quality={100}
      className="rounded-xl shadow-md"
      width={1920}
      height={1080}
    >
      {children}
    </Image>
  ),
} as MDXComponents;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ...MDXStyles,
    ...components,
  };
}
