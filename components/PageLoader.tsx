"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import JSEDLoader from "./JSEDLoader";

export default function PageLoader({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <JSEDLoader />}
      {children}
    </>
  );
}