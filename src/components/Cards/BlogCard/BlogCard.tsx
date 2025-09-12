"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";
import BlogCardHover from "./BlogCardHover";

export interface BlogCardProps {
  title: string;
  content: string;
  image: string;
  href: string;
  className?: string;
}

function BlogCard({ title, content, image, href, className }: BlogCardProps) {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className={cn(
        "max-w-[22rem] rounded-b-[2rem] rounded-t-[10px] border border-gray-200 bg-white",
        className
      )}
    >
      <div
        className="relative h-50 w-full overflow-hidden rounded-t-[10px] hover:rounded-br-[2rem] duration-300"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-bl-[40px]",
            "bg-gradient-to-t from-black/40 via-black/10 to-transparent",
            "transition-opacity duration-500",
            isHover ? "opacity-100 z-10" : "opacity-0 z-10"
            )}
        />

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover relative rounded-bl-[40px]"
        />

        <BlogCardHover
          content="read"
          className={cn(
            {
              "bg-white/15 hover:bg-blue-600 hover:border-transparent hover:duration-0 bottom-5 opacity-700":
                isHover,
              "-bottom-5 opacity-0": !isHover,
            },
            "transition-[opacity,bottom,background-color] duration-500 z-20"
          )}
          href="/"
        />
      </div>

      <div className="p-5 flex flex-col gap-y-3">
        <Link href={href}>
          <Title
            title={title}
            className="text-xl font-roboto-mono font-semibold hover:text-blue-600 transition-colors duration-300"
          />
        </Link>
        <p className="text-gray-600 text-lg font-serif">{content}</p>
      </div>
    </div>
  );
}

export default BlogCard;
