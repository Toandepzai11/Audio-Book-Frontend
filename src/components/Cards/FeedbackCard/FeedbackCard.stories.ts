import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import FeedbackCard from "./FeedbackCard";

const meta: Meta<typeof FeedbackCard> = {
  component: FeedbackCard,
  args: {
    title: "“Lorem isump isump lorem whan”",
    userName: "John Doe",
    userImage: "https://picsum.photos/40/40",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    className: "max-w-sm",
  },
};

export default meta;
type Story = StoryObj<typeof FeedbackCard>;

export const Primary: Story = {};
