import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  coverImage: string;
  content: PortableTextBlock[];
  excerpt: string;
  author: any;
};
