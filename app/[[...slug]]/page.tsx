import type { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata";
import { getPageData } from "@/sanity/query/getPageData";
import { TPageProps } from "@/types";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug?: string[] } }): Promise<Metadata> {
  const defaultPage = process.env.DEFAULT_HOME_SLUG as string;
  const { slug } = await params;
  const resolved = !slug ? defaultPage : slug[0];
  return await createMetadata(resolved);
}

// Dynamic Page Handler
export default async function Page({ params }: { params: { slug?: string[] } }) {
  const defaultPage = process.env.DEFAULT_HOME_SLUG as string;
  const { slug } = await params;
  const resolved = !slug ? defaultPage : slug[0];
  const page = await getPageData(resolved);

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