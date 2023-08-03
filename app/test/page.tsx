"use client";

import { getPostsMeta } from "@/lib/post";
import React, { useEffect, useState } from "react";

type Meta = {
  id: string;
  title: string;
};

function Test() {
  const [posts, setPosts] = useState<Meta[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsData = await getPostsMeta();
        console.log(postsData);
        if (postsData && postsData.length > 0) {
          setPosts(postsData);
        } else {
          setError("No more posts available.");
        }
      } catch (err: any) {
        setError(err.message);
      }
    }
    fetchData();
  }, [page]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {/* Render your posts here */}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {/* Other post properties */}
        </div>
      ))}

      <button onClick={handlePrevious} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Test;
