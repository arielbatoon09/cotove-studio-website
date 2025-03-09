import { groq } from "next-sanity";
import { client } from "../lib/client";

// Combination of Basic and Page - Metadata
export async function metadataQuery(slug: string) {
  return client.fetch(
    groq`
      {
        "basic": *[_type == 'basic'][0] {
          website,
          domain
        },
        "page": *[_type == "pages" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          type,
          description,
          "image": imageUrl->image.asset->url,
          keywords,
          publishedAt
        }
      }
    `,
    { slug }
  );
}