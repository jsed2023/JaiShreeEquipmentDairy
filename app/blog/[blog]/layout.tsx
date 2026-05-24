import { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogs } from "@/config/blogs";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}): Promise<Metadata> {
  const blog =
    blogs[params.blog as keyof typeof blogs];

  if (!blog) {
    return {
      title: "Blog Not Found",
      description:
        "The requested blog could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const blogUrl = `${siteConfig.url}/blogs/${params.blog}`;

  return {
    title: blog.title,

    description: blog.description,

    keywords: blog.keywords,

    authors: [
      {
        name: `${blog.title} - ${siteConfig.name}`,
      },
    ],

    alternates: {
      canonical: blogUrl,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: blogUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

export default function BlogSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: { blog: string };
}) {
  const blog =
    blogs[params.blog as keyof typeof blogs];

  if (!blog) {
    return notFound();
  }

  return (
    <div className="overflow-x-hidden">
      {children}
    </div>
  );
}