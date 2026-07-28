"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

import {
  SunFilledIcon,
  MoonFilledIcon,
} from "@/components/icons";

import type { ThemeSwitchProps } from "@/types";

export const ThemeSwitch = ({
  className,
  classNames,
}: ThemeSwitchProps) => {
  const { resolvedTheme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={clsx(
          "flex size-9 items-center justify-center rounded-lg",
          className,
          classNames?.base
        )}
      >
        <span className="size-5.5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={clsx(
        "flex size-9 cursor-pointer items-center justify-center",
        "rounded-lg bg-transparent",
        "transition-opacity hover:opacity-80",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
        classNames?.base,
        classNames?.wrapper
      )}
    >
      {isDark ? (
        <SunFilledIcon size={22} />
      ) : (
        <MoonFilledIcon size={22} />
      )}
    </button>
  );
};