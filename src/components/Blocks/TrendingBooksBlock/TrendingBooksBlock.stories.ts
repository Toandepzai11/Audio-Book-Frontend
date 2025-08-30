import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import TrendingBooksBlock from "./TrendingBooksBlock";

const meta: Meta<typeof TrendingBooksBlock> = {
  component: TrendingBooksBlock,
  args: {
    title: "Trending Audio Books",
  },
};

export default meta;
type Story = StoryObj<typeof TrendingBooksBlock>;

export const Primary: Story = {};
