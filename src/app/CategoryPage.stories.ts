import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import CategoryPage from './category';

const meta: Meta<typeof CategoryPage> = {
  component: CategoryPage,
};

export default meta;
type Story = StoryObj<typeof CategoryPage>;

export const Default: Story = {};
