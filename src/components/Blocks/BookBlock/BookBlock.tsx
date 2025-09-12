"use client";

import Title from "@/components/Title/Title";
import BookCard from "@/components/Cards/BookCard";
import { useState } from "react";
import { BookList } from "./Books";
import Button from "@/components/Button";

function BookBlock() {
  const [visibleBooks, setVisibleBooks] = useState(9);

  const loadMoreBooks = () => {
    setVisibleBooks((prevVisible) => prevVisible + 9);
  };

  return (
    <div>
      <Title title="Most Read Books" className="text-3xl mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {BookList.slice(0, visibleBooks).map((book, idx) => (
          <BookCard
            key={idx}
            image={book.image ?? "https://picsum.photos/500/300"}
            title={book.title}
            href={book.slug}
            content="asdf"
          />
        ))}
      </div>

      {visibleBooks < BookList.length && (
        <div className="flex justify-center py-10">
          <button onClick={loadMoreBooks}>
            <Button content="Load More" href="#" />
          </button>
        </div>
      )}
    </div>
  );
}

export default BookBlock;
