import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getBasicData() {
  return client.fetch(
    groq`
      *[_type == 'basic'][0] {
        website,
        domain,
        email,
        phone,
        address,
      }
    `
  );
}