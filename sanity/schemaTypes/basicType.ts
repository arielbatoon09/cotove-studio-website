import { defineField, defineType } from "sanity";

export const basicType = defineType({
  name: "basic",
  title: "Basic Details",
  type: "document",
  fields: [
    defineField({
      name: "website",
      type: "string",
      title: "Website Name",  
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "domain",
      type: "url",
      title: "Website Domain",
      description: "E.g.: https://www.example.com",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone Number",
    }),
    defineField({
      name: "address",
      type: "string",
      title: "Address",
    }),
  ],
});