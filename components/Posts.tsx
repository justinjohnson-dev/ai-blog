import { getPostsMeta } from "@/lib/post";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();
  console.log(posts);

  if (!posts) {
    return <p className="mt-10 text-center>">No posts found.</p>;
  }

  return (
    <section className="mt-6 mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold dark:text-white/90">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Articles
        </span>
      </h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
