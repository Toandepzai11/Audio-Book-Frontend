export interface FeedbackProps {
  title: string;
  userName: string;
  userImage: string;
  description: string;
}

export const Feedbacks: FeedbackProps[] = [
  {
    title: "Great Book!",
    userName: "John Doe",
    userImage: "https://picsum.photos/40/40",
    description: "I really enjoyed this book. It was a great read!",
  },
  {
    title: "Helpful Resource",
    userName: "Jane Smith",
    userImage: "https://picsum.photos/41/41",
    description: "This book helped me understand the topic clearly.",
  },
  {
    title: "Well Written",
    userName: "Alice Johnson",
    userImage: "https://picsum.photos/42/42",
    description: "Engaging style and full of insights.",
  },
];

export default Feedbacks;