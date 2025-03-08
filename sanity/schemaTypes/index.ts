import { type SchemaTypeDefinition } from "sanity";
import { pageType } from "./pageType";
import { basicType } from "./basicType";
import { mediaType } from "./mediaType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [basicType, pageType, mediaType],
}
