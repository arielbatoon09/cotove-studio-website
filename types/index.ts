import { PortableTextBlock } from 'sanity';

export type TPageProps = {
  title: string;
  slug: string;
  description: PortableTextBlock[];
  url: string;
  keywords: string[];
  publishedAt: Date;
};