'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  placeholderContent: string;
  inputProps?: string;
  className?: string;
}

function SearchBar({ placeholderContent, inputProps, className }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={cn(
        'flex items-center rounded-full px-3 py-2 w-[15.625rem] h-[1.875rem] group transition-all',
        isFocused
          ? 'border-2 border-blue'
          : 'border-2 border-gray-400 hover:border-blue',
        className,
      )}
    >
      {!isFocused && (
        <Search className="text-gray-400 group-hover:text-blue size-4" />
      )}

      <input
        type="text"
        className={cn(
          'outline-none ml-2 w-full text-black transition-all placeholder-gray-400 group-hover:placeholder-blue',
          isFocused && 'placeholder-transparent! caret-blue',
          inputProps,
        )}
        placeholder={placeholderContent}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}

export default SearchBar;
