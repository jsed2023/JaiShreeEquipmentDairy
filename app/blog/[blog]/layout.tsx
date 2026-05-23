import { blogs } from "@/config/blogs";

type Props = {
  children: React.ReactNode;

  params: {
    blog: string;
  };
};

export default function BlogSlugLayout({
  children,
  params,
}: Props) {
  const blog =
    blogs[params.blog as keyof typeof blogs];

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">
          Blog Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden bg-black text-white">
      {children}
    </main>
  );
}