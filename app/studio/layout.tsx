import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Application",
  robots: {
    index: true,
    follow: true,
  }
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
};