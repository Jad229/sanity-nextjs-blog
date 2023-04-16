import { getBlogPosts } from "@/sanity/sanity-utils";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1 className="text-4xl">Welcome to the Blog</h1>
      <div>My Posts go here</div>
    </div>
  );
}

export default HomePage;
