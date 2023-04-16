import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2023-4-15"

export default defineConfig({
  basePath: "/studio",
  title: "DOMINICANDEV Content Studio",

  projectId,
  dataset,
  apiVersion,

  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
