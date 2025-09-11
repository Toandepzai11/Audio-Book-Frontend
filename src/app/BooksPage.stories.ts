import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import BooksPage from './books';

const meta: Meta<typeof BooksPage> = {
  component: BooksPage,
};

export default meta;
type Story = StoryObj<typeof BooksPage>;

export const Default: Story = {};
