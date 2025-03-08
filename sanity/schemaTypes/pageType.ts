import { defineField, defineType } from "sanity";
import { client } from "../lib/client";

export const pageType = defineType({
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Unique URL identifier for the page.",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: async (slug, context) => {
          const { document } = context;

          if (!slug) return false;
          
          const existingSlug = await client.fetch(
            `*[_type == $type && slug.current == $slug && _id != $id][0]`,
            {
              type: document?._type,
              slug,
              id: document?._id,
            }
          );

          return !existingSlug;
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      type: "string",
      title: "Page Type",
      description: "Choose the type of content for this page.",
      options: {
        list: ["Website", "Article"],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Page Description",
      description: "A short summary of the page.",
    }),
    defineField({
      name: "imageUrl",
      type: "url",
      title: "Image URL",
      description: "Provide an external image URL instead of uploading.",
    }),
    defineField({
      name: "keywords",
      type: "array",
      title: "SEO Keywords",
      description: "Relevant keywords for search engines.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      description: "Automatically set when the page is saved.",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
});
