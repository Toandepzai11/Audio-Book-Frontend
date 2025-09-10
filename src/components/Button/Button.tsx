import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  content: string;
  href: string;
  className?: string;
}

function Button({ content, href, className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex rounded-full bg-gradient-to-r from-green-500 to-blue-500 p-0.5 group",
        className
      )}
    >
      <span className="inline-flex rounded-full bg-black py-2 px-5 group-active:bg-transparent">
        <span className="font-serif font-extrabold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent group-hover:text-white">
          {content}
        </span>
      </span>
    </Link>
  );
}

export default Button;
