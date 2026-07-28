"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[50vh] items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Something went wrong!
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          An unexpected error occurred. Please try again.
        </p>

        <button
          type="button"
          onClick={reset}
          className="
            mt-6
            cursor-pointer
            rounded-lg
            bg-sky-600
            px-5
            py-2.5
            font-medium
            text-white
            transition-colors
            hover:bg-sky-700
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-sky-600
          "
        >
          Try again
        </button>
      </div>
    </main>
  );
}