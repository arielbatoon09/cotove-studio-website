import { Metadata } from "next";

interface MetadataProps {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  type: "Website" | "Article";
  noIndex: boolean;
  favicon: string;
}

interface BasicProps {
  website: string;
  domain: string;
  email: string;
  phone: string;
  address: string;
}

export function generateMetadata(metadata: MetadataProps, basic: BasicProps): Metadata {
  const domainWithProtocol = basic.domain.startsWith("http")
    ? basic.domain
    : `https://${basic.domain}`;

  return {
    metadataBase: new URL(domainWithProtocol),
    title: `${basic.website} - ${metadata.title}`,
    description: metadata.description,
    keywords: metadata.keywords,
    creator: basic.website,
    publisher: basic.website,
    openGraph: {
      type: metadata.type === "Website" ? "website" : "article" as const,
      locale: "en_US",
      url: `${domainWithProtocol}/${metadata.title}`,
      siteName: basic.website,
      title: `${basic.website} - ${metadata.title}`,
      description: metadata.description,
      images: [
        {
          url: metadata.image,
          width: 1200,
          height: 675,
          alt: `${basic.website} - ${metadata.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${basic.website} - ${metadata.title}`,
      description: metadata.description,
      images: metadata.image,
    },
    robots: metadata.noIndex ? "noindex, nofollow" : "index, follow",
  };
}