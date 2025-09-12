import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface BlogCardHoverProps {
  content: string;
  className?: string;
  href: string;
}
function BlogCardHover({
  content,
  className = "",
  href,
}: BlogCardHoverProps) {
  return (
    <Link
      className={cn(
        "absolute bottom-4 right-4 px-4 py-2 rounded-4xl border-[0.5px] border-gray-500",
        "backdrop-blur-lg",
        className
      )}
      href={href}
    >
      <div className="w-full flex flex-row items-center justify-between p-2 gap-2 text-white text-2xl uppercase font-bold">
        <SquareArrowOutUpRight />
        {content}
      </div>
    </Link>
  );
}

export default BlogCardHover;
