"use client";
import Image from "next/image";
export default function JSEDLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black">
      <div className="relative flex items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        <Image
          src="/logo.png"
          alt="JSED Logo"
          width={48}
          height={48}
          className="absolute"
          priority
        />
      </div>
    </div>
  );
}