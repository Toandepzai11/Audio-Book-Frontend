import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import FeedbackBlock from "./FeedbackBlock";

const meta: Meta<typeof FeedbackBlock> = {
  component: FeedbackBlock,
  args: {
    title: "Lorem ipsum dolor sit amet",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: "https://picsum.photos/200/300",
    href: "",
  },
};

export default meta;
type Story = StoryObj<typeof FeedbackBlock>;

export const Primary: Story = {};
