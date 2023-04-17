import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import React from "react";

async function HomePage() {
  const posts = await getPosts();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Welcome to the{" "}
        <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          Blog
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Check out our blogs</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Blogs</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className=" p-1 border-2 border-gray-500 rounded-lg"
          >
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={post.title}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="space-y-3">
              <p className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent ">
                {post.title}
              </p>
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
