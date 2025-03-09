import { Metadata } from "next";
import { metadataQuery } from "@/sanity/query/metadataQuery";

export async function createMetadata(slug: string): Promise<Metadata> {
  const { page, basic } = await metadataQuery(slug);
  const domainWithProtocol = basic.domain.startsWith("http") ? basic.domain : `https://${basic.domain}`;

  return {
    metadataBase: new URL(domainWithProtocol),
    title: `${basic.website} - ${page.title}`,
    description: page.description,
    keywords: page.keywords,
    creator: basic.website,
    publisher: basic.website,
    openGraph: {
      type: page.type === "Website" ? "website" : "article",
      locale: "en_US",
      url: `${domainWithProtocol}/${page.slug.current}`,
      siteName: basic.website,
      title: `${basic.website} - ${page.title}`,
      description: page.description,
      images: [
        {
          url: page.image,
          width: 1200,
          height: 675,
          alt: `${basic.website} - ${page.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${basic.website} - ${page.title}`,
      description: page.description,
      images: page.image,
    },
    robots: page.noIndex ? "noindex, nofollow" : "index, follow",
  };
}
