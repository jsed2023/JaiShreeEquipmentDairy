import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogs } from "@/config/blogs";
import { siteConfig } from "@/config/site";

type BlogParams = {
  blog: string;
};

type MetadataProps = {
  params: Promise<BlogParams>;
};

type BlogLayoutProps = {
  children: React.ReactNode;
  params: Promise<BlogParams>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { blog: blogSlug } = await params;

  if (!blogSlug) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const decodedSlug = decodeURIComponent(blogSlug);

  const blog =
    blogs[decodedSlug as keyof typeof blogs];

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const blogUrl = `${siteConfig.url}/blog/${encodeURIComponent(
    decodedSlug
  )}`;

  return {
    title: blog.title,

    description: blog.description,

    keywords: blog.keywords,

    authors: [
      {
        name: siteConfig.name,
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
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogSlugLayout({
  children,
  params,
}: BlogLayoutProps) {
  const { blog: blogSlug } = await params;

  if (!blogSlug) {
    notFound();
  }

  const decodedSlug = decodeURIComponent(blogSlug);

  const blog =
    blogs[decodedSlug as keyof typeof blogs];

  if (!blog) {
    notFound();
  }

  return (
    <div className="overflow-x-hidden">
      {children}
    </div>
  );
}