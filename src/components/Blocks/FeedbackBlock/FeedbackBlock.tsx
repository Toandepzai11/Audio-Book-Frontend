"use client";

import { cn } from "@/lib/utils";
import { Feedbacks } from "./Feedbacks";
import FeedbackCard from "@/components/Cards/FeedbackCard";
import Title from "@/components/Title/Title";

export interface FeedbackProps {
  title: string;
  userName: string;
  userImage: string;
  description: string;
}

function FeedbackBlock() {
  return (
    <div className="gap-8 flex flex-col">
      <Title title="Feedback" className="text-3xl font-bold" />
      <div className={cn("flex flex-col sm:flex-row gap-4 items-stretch")}>
        {Feedbacks.map((fb, idx) => (
          <FeedbackCard
            key={idx}
            title={fb.title}
            userName={fb.userName}
            userImage={fb.userImage}
            description={fb.description}
            className="max-w-sm flex-1"
          />
        ))}
      </div>
    </div>
  );
}

export default FeedbackBlock;
