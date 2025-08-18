import type { Meta, StoryObj } from "@storybook/react";

import BookCard from "./BookCard";

const meta: Meta<typeof BookCard> = {
  component: BookCard,
  args: {
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: "https://picsum.photos/200/300",
    href: "",
  },
};

export default meta;
type Story = StoryObj<typeof BookCard>;

export const Primary: Story = {};
