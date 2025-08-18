import Image from "next/image";
import Link from "next/link";

export interface IntroBlockProps {
  title: string;
  content: string;
  image: string;
}

function IntroBlock({ title, content, image }: IntroBlockProps) {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between gap-8">
      <div className="max-w-200">
        <h1 className="text-6xl font-bold leading-tight text-black break-words">
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-700 break-words">
          {content}
        </p>
        <Link
          href="/books"
          className="inline-block mt-6 bg-black text-white font-medium py-2 px-5 rounded w-full text-center"
        >
          Explore
        </Link>
      </div>
      
      <Image
        src={image}
        alt="image"
        width={300}
        height={200}
        className="w-100 max-w-200"
      />
    </div>
  );
}

export default IntroBlock;