import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import BlogCard from "./BlogCard";

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
  args: {
    title: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: "https://picsum.photos/500/300",
    href: "",
  },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Primary: Story = {};
