
import { tv } from "tailwind-variants";

/* =========================================
   REUSABLE TITLE STYLES
   Astro + Tailwind CSS v4
   Dark Navy + Cyan + Blue Theme
========================================= */

export const title = tv({
  base: "inline font-semibold tracking-tight",

  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",

      yellow: "from-[#FF705B] to-[#FFB457]",

      blue: "from-[#32baff] to-[#087cff]",

      cyan: "from-[#5cecf2] to-[#00d5df]",

      green: "from-[#6FEE8D] to-[#17c964]",

      pink: "from-[#FF72E1] to-[#F54C7A]",

      foreground:
        "from-foreground to-muted-foreground",
    },

    size: {
      sm: "text-3xl lg:text-4xl",

      md: "text-[2.3rem] lg:text-5xl leading-tight",

      lg: "text-4xl lg:text-6xl leading-tight",
    },

    fullWidth: {
      true: "block w-full",
    },
  },

  defaultVariants: {
    size: "md",
    color: "cyan",
  },

  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class:
        "bg-gradient-to-b bg-clip-text text-transparent",
    },
  ],
});

/* =========================================
   REUSABLE SUBTITLE STYLES
========================================= */

export const subtitle = tv({
  base:
    "my-2 block w-full max-w-full text-lg text-muted-foreground lg:text-xl",

  variants: {
    fullWidth: {
      true: "!w-full",
      false: "md:w-1/2",
    },
  },

  defaultVariants: {
    fullWidth: true,
  },
});
