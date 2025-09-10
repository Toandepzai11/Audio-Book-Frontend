import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import BookBlock from "./BookBlock";

const meta: Meta<typeof BookBlock> = {
  component: BookBlock,
  args: {
    
  },
};

export default meta;
type Story = StoryObj<typeof BookBlock>;

export const Primary: Story = {};
