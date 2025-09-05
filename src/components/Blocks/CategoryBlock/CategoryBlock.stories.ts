import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import CategoryBlock from "./CategoryBlock";

const meta: Meta<typeof CategoryBlock> = {
  component: CategoryBlock,
  args: {
    
  },
};

export default meta;
type Story = StoryObj<typeof CategoryBlock>;

export const Primary: Story = {};
