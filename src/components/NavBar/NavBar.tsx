'use client';

import { cn } from '@/lib/utils';
import NavLinks from './NavLinks';
import Search from './SearchBar';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className="flex flex-wrap items-center justify-evenly p-4 bg-white w-full">
      <Link
        href={'/'}
        className={cn(
          'font-semibold relative text-black'
        )}
      >ListenLit</Link>
      
      <div className="flex md:flex-row flex-col justify-between gap-4">
        <NavLinks />
        <Search placeholderContent="Search" inputProps="text-sm" />
      </div>
    </nav>
  );
}

export default NavBar;