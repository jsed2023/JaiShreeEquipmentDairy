"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: React.ComponentProps<typeof ThemeProvider>;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return <ThemeProvider {...themeProps}>{children}</ThemeProvider>;
}
