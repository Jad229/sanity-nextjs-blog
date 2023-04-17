import { Post } from "@/types/Post";
import { createClient, groq } from "next-sanity";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2023-04-16"

export async function getPosts(): Promise<Post[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  return client.fetch(
    groq`*[_type=='post']{
    _id,
    _createdAt,
    title,
    content,
    excerpt,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    author->,
  } | order(_createdAt asc)`
  );
}
