export interface Book {
  title: string;
  slug: string;
}

export interface Category {
  name: string;
  books: Book[];
}

export const Book: Book[] = [
  { title: "Pride and Prejudice", slug: "/books/pride-and-prejudice" },
  { title: "1984", slug: "/books/1984" },
  { title: "The Great Gatsby", slug: "/books/the-great-gatsby" },
  { title: "Pride and Prejudice", slug: "/books/pride-and-prejudice" },
  { title: "1984", slug: "/books/1984" },
  { title: "The Great Gatsby", slug: "/books/the-great-gatsby" },
  { title: "Pride and Prejudice", slug: "/books/pride-and-prejudice" },
  { title: "1984", slug: "/books/1984" },
  { title: "The Great Gatsby", slug: "/books/the-great-gatsby" },
  { title: "1984", slug: "/books/1984" },
  { title: "The Great Gatsby", slug: "/books/the-great-gatsby" },
];

export const categories: Category[] = [
  {
    name: "Novel",
    books: [
      { title: "Pride and Prejudice", slug: "/books/pride-and-prejudice" },
      { title: "1984", slug: "/books/1984" },
      { title: "The Great Gatsby", slug: "/books/the-great-gatsby" },
    ],
  },
  {
    name: "Poetry",
    books: [
      { title: "Leaves of Grass", slug: "/books/leaves-of-grass" },
      { title: "The Waste Land", slug: "/books/the-waste-land" },
    ],
  },
  {
    name: "History",
    books: [
      { title: "Sapiens", slug: "/books/sapiens" },
      { title: "Guns, Germs, and Steel", slug: "/books/guns-germs-steel" },
    ],
  },
];
