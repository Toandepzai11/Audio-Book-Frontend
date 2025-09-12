export interface Book {
  title: string;
  slug: string;
  image?: string;
}

export interface Category {
  name: string;
  books: Book[];
}

export const BookList: Book[] = [
  { title: "1984", slug: "/books/1984" },
  {
    title: "Guns, Germs, and Steel",
    slug: "/books/guns-germs-steel",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Leaves of Grass",
    slug: "/books/leaves-of-grass",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Pride and Prejudice",
    slug: "/books/pride-and-prejudice",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Sapiens",
    slug: "/books/sapiens",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "The Great Gatsby",
    slug: "/books/the-great-gatsby",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "The Waste Land",
    slug: "/books/the-waste-land",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "1984",
    slug: "/books/1984",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Guns, Germs, and Steel",
    slug: "/books/guns-germs-steel",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Leaves of Grass",
    slug: "/books/leaves-of-grass",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Pride and Prejudice",
    slug: "/books/pride-and-prejudice",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Sapiens",
    slug: "/books/sapiens",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "The Great Gatsby",
    slug: "/books/the-great-gatsby",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "The Waste Land",
    slug: "/books/the-waste-land",
    image: "https://picsum.photos/200/300",
  },
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
