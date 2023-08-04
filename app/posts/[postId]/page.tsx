import { getFormattedGitHubDate } from "@/lib/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/post";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedGitHubDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <h2 className="text-3xl mt-4 mb-1">
        <p className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 m-0 p-0">
          {meta.title}
        </p>
      </h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article className="text-base">{content}</article>
      <section>
        <h4>Related:</h4>
        <div className="flex flex-row gap-4 text-sm">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </>
  );
}
