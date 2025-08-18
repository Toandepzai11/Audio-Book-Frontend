import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  className?: string;
}
function Title({ title, className }: TitleProps) {
  return (
    <div
      className={cn(
        "text-6xl font-bold leading-tight text-black break-words",
        className
      )}
    >
      {title}
    </div>
  );
}

export default Title;
