import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Basic Details")
        .child(
          S.document()
            .schemaType("basic")
            .documentId("basic-details")
        ),

      S.divider(),
      S.listItem()
        .title("Pages")
        .schemaType("pages")
        .child(S.documentTypeList("pages").title("Pages")),

      S.divider(),
      S.listItem()
        .title("Media Library")
        .schemaType("media")
        .child(S.documentTypeList("media").title("Media Library")),
    ]);
