import { getPosts } from "@/sanity/sanity-utils";
import { Post } from "@/types/Post";
import React from "react";

async function HomePage() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-4xl">Welcome to the Blog</h1>
      <div>
        {posts.map((post) => (
          <div key={post._id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
