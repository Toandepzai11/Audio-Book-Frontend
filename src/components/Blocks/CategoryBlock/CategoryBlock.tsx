"use client";

import { useState } from "react";
import { categories } from "./Categories";
import Link from "next/link";
import Title from "@/components/Title/Title";

function CategoryBlock() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (name: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Title title="Variety of topics!" className="text-3xl pb-6" />

      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.name}>
            <button
              onClick={() => toggleCategory(cat.name)}
              className="w-full text-left text-lg font-medium text-gray-800 hover:text-indigo-600 transition-colors"
            >
              {cat.name} ({cat.books.length})
            </button>

            {openCategories.has(cat.name) && (
              <ul className="ml-6 mt-3 space-y-2">
                {cat.books.map((book) => (
                  <li key={book.slug}>
                    <Link
                      href={book.slug}
                      className="text-indigo-600 hover:underline"
                    >
                      {book.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryBlock;
