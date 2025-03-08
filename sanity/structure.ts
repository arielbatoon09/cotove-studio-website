import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Single Document: Basic Details (BasicType)
      S.listItem()
        .title("Basic Details")
        .child(
          S.document()
            .schemaType("basic")
            .documentId("basic-details") // Ensure only one document exists
        ),

      // Other Document Types (e.g., Pages)
      S.divider(),
      S.listItem()
        .title("Pages")
        .schemaType("pages")
        .child(S.documentTypeList("pages").title("Pages")),

      // Add more sections if needed...
    ]);
