"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/Title";
import BookCardHover from "./BookCardHover";

export interface BookCardProps {
  title: string;
  content: string;
  image: string;
  href: string;
  className?: string;
}

function BookCard({ title, content, image, href, className }: BookCardProps) {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className={cn(
        "max-w-[22rem] rounded-[2rem] border border-gray-200 bg-white",
        className
      )}
    >
      <div
        className="relative h-60 w-full overflow-hidden rounded-t-[2rem] hover:rounded-br-[2rem] duration-300"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image src={image} alt={title} fill className="object-cover" />

        <BookCardHover
          content="read"
          className={cn(
            {
              "bg-white/15 hover:bg-blue-600 hover:border-transparent hover:duration-0 bottom-5 opacity-700":
                isHover,
              "-bottom-5 opacity-0": !isHover,
            },
            "transition-[opacity,bottom,background-color] duration-500"
          )}
          href="/"
        />
      </div>

      <div className="p-5 flex flex-col gap-y-3">
        <Link href={href}>
          <Title
            title={title}
            className="text-lg font-bold italic hover:text-blue-600 transition-colors duration-300"
          />
        </Link>
        <p className="text-gray-600 font-serif">{content}</p>
      </div>
    </div>
  );
}

export default BookCard;
