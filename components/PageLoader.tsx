"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import JSEDLoader from "./JSEDLoader";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const showTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setMounted(true);
      setVisible(true);
    }, 120); // prevents flicker

    const hideTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setVisible(false);

      // wait for fade-out before unmount
      const unmountTimer = setTimeout(() => {
        setMounted(false);
      }, 300);

      return () => clearTimeout(unmountTimer);
    }, 600);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  return (
    <>
      {mounted && (
        <div
          className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <JSEDLoader />
        </div>
      )}
      {children}
    </>
  );
}