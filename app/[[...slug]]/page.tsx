import type { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata";
import { getPageData } from "@/sanity/query/getPageData";
import { TPageProps } from "@/types";
import { notFound } from "next/navigation";

type TParams = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: TParams): Promise<Metadata> {
  const { slug } = await params;
  return await createMetadata(slug);
}

// Dynamic Page Handler
export default async function Page({ params }: { params: { slug: string } }) {
  const defaultPage = process.env.DEFAULT_HOME_SLUG as string;
  const { slug } = await params;
  const page = await getPageData(!slug ? defaultPage : slug[0]);

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