"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Title from "@/components/Title";

export interface BookCardProps {
  title: string;
  userName: string;
  userImage: string;
  description: string;
  className?: string;
}

function FeedbackCard({
  title,
  userName,
  userImage,
  description,
  className,
}: BookCardProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-xl border border-gray-300 p-6",
        className
      )}
    >
      <Title title={title} className="text-lg font-medium text-gray-900" />
      <div className="mt-6 flex flex-col md:flex-row gap-4 items-center">
        <Image
          src={userImage}
          alt="Profile image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="gap-4">
          <p className="text-sm font-medium text-gray-900">{userName}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
