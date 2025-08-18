import type { Meta, StoryObj } from '@storybook/react';

import IntroBlock from './IntroBlock';

const meta: Meta<typeof IntroBlock> = {
  component: IntroBlock,
  args: {
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    image: "/headphone.svg",
  },
};

export default meta;
type Story = StoryObj<typeof IntroBlock>;

export const Primary: Story = {};