import { type SchemaTypeDefinition } from "sanity";
import { pageType } from "./pageType";
import { basicType } from "./basicType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, basicType],
}
