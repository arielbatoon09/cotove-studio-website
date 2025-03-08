import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getPageData(slug: string) {
  return client.fetch(
    groq`
      *[_type == "pages" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        type,
        description,
        "imageUrl": image.asset->url,
        keywords,
        publishedAt
      }
    `,
    { slug }
  );
}