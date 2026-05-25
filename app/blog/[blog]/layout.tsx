import { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogs } from "@/config/blogs";
import { siteConfig } from "@/config/site";

type Props = {
  children: React.ReactNode;
  params: {
    blog: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}): Promise<Metadata> {
  const blog =
    blogs[params.blog as keyof typeof blogs];

  // Blog not found
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

  // Correct canonical URL
  const blogUrl = `${siteConfig.url}/blog/${params.blog}`;

  return {
    title: blog.title,

    description: blog.description,

    keywords: blog.keywords,

    authors: [
      {
        name: siteConfig.name,
      },
    ],

    robots: {
      index: true,
      follow: true,
    },

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
  };
}

export default function BlogSlugLayout({
  children,
  params,
}: Props) {
  const blog =
    blogs[params.blog as keyof typeof blogs];

  // 404 page if blog doesn't exist
  if (!blog) {
    return notFound();
  }

  return (
    <div className="overflow-x-hidden">
      {children}
    </div>
  );
}