"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import Title from "@/components/Title";
import BookCard from "@/components/Cards/BookCard";
import { TrendingBooksList } from "./TrendingBooksList";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface TrendingBooksBlockProps {
  title: string;
}

function TrendingBooksBlock({ title }: TrendingBooksBlockProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col gap-8 w-full">
      <Title title={title} className="text-3xl" />

      <div className="flex items-center gap-4">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full hover:text-blue-400 duration-100"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="overflow-hidden flex-1" ref={emblaRef}>
          <div className="flex">
            {TrendingBooksList.map((book, idx) => (
              <div
                key={idx}
                className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33%] lg:flex-[0_0_25%] px-2"
              >
                <BookCard
                  title={book.title}
                  content={book.content}
                  image={book.image}
                  href={book.href}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="p-2 rounded-full hover:text-blue-400 duration-100"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default TrendingBooksBlock;
