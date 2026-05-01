import Link from "next/link";

type NavButtonProps = {
  href: string;
  label: string;
};

export default function NavButton({ href, label }: NavButtonProps) {
  return (
    <Link
      href={href}
      className="
        w-full

        h-[64px] md:h-[60px]

        flex items-center justify-center
        text-center

        px-2

        bg-white
        border border-gray-300
        rounded-xl

        text-xs sm:text-sm md:text-base font-semibold
        leading-tight

        bg-clip-text text-transparent animate-title-gradient

        hover:bg-gray-100
        hover:border-gray-400
        hover:shadow-md

        focus:outline-none
        focus:ring-2 focus:ring-blue-500
        focus:ring-offset-2

        active:scale-[0.97]
        transition-all duration-200
      "
    >
      <span className="line-clamp-2">{label}</span>
    </Link>
  );
}