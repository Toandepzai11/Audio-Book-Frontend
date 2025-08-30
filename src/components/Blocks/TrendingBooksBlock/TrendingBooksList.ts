export interface BookCardProps {
  title: string;
  content: string;
  href: string;
  image: string;
}

export const TrendingBooksList: BookCardProps[] = [
  {
    title: "The Midnight Library",
    content: "A novel about all the lives we could live and the choices we make.",
    image: "https://picsum.photos/400/600?random=1",
    href: "/books/the-midnight-library",
  },
  {
    title: "Atomic Habits",
    content: "An easy and proven way to build good habits and break bad ones.",
    image: "https://picsum.photos/400/600?random=2",
    href: "/books/atomic-habits",
  },
  {
    title: "Project Hail Mary",
    content: "A lone astronaut must save humanity from extinction in this space thriller.",
    image: "https://picsum.photos/400/600?random=3",
    href: "/books/project-hail-mary",
  },
  {
    title: "Educated",
    content: "A memoir about growing up in a strict and abusive household in rural Idaho.",
    image: "https://picsum.photos/400/600?random=4",
    href: "/books/educated",
  },
  {
    title: "The Alchemist",
    content: "A philosophical book about following your dreams and destiny.",
    image: "https://picsum.photos/400/600?random=5",
    href: "/books/the-alchemist",
  },
];
