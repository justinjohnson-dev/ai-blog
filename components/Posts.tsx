"use client";

import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, forwardRef } from "react";
import PostSkeleton from "./PostSkeleton";
import ListItem from "./ListItem";

function Home() {
  const fetchPost = useCallback(async (page: number) => {
    const res = await fetch(`/api/posts?page=${page}&limit=3`);
    const posts = await res.json();
    return posts;
  }, []);

  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["posts"],
      async ({ pageParam = 1 }) => {
        const posts = await fetchPost(pageParam);
        return posts;
      },
      {
        getNextPageParam: (_, pages) => {
          return pages.length + 1;
        },
      },
    );

  const lastPostRef = useRef<HTMLLIElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  const _posts = data?.pages.flatMap((page) => page);

  return (
    <section className="mt-6 mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold dark:text-white/90">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Articles
        </span>
      </h2>
      {isLoading && <PostSkeleton />}
      {!isLoading && (
        <ul className="w-full list-none p-0">
          {_posts?.map((post, i) => {
            if (i === _posts.length - 1)
              return <ListItem key={post.id} post={post} ref={ref} />;
            return <ListItem key={post?.id} post={post} />;
          })}
        </ul>
      )}
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage
          ? "Loading more..."
          : (data?.pages.length ?? 0) < 3
          ? "Loading Post..."
          : "End of Posts"}
      </button>
    </section>
  );
}

export default Home;
