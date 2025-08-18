export interface LinkProps {
  label: string;
  url: string;
}

export const navLinks: LinkProps[] = [
  { label: 'Home', url: '/' },
  { label: 'Category', url: '/category' },
  { label: 'Books', url: '/books' },
  { label: 'Blog', url: '/blog' },
  { label: 'Login', url: '/login' },
];