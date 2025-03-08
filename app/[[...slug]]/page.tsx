import { generateMetadata as createMetadata } from "@/lib/metadata";
import { getPageData } from "@/sanity/query/getPageData";
import { getBasicData } from "@/sanity/query/getBasicData";
import { TPageProps } from "@/types";
import { notFound } from "next/navigation";

// Generate Page Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const defaultPage = process.env.DEFAULT_HOME_SLUG as string;
  const { slug } = await params;
  const page = await getPageData(!slug ? defaultPage : slug[0]);
  const basic = await getBasicData();

  if (!page) {
    return {};
  }
  return createMetadata(page, basic);
}

// Dynamic Page Handler
export default async function Page({ params }: { params: { slug: string } }) {
  const defaultPage = process.env.DEFAULT_HOME_SLUG as string;
  const { slug } = await params;
  const page = await getPageData(!slug ? defaultPage : slug[0]);
  console.log(page);

  if (!page) {
    return notFound();
  }

  return renderPage(page);
}


// Render Pages
function renderPage(page: TPageProps) {
  return (
    <div>{page.title}</div>
  );
}

export const revalidate = 1;