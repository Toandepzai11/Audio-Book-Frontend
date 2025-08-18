import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkProps, navLinks } from '../links';
import { cn } from '@/lib/utils';

function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row flex-wrap justify-start gap-x-12 gap-y-1 px-4">
      {navLinks.map((tab: LinkProps) => {
        const isActive = pathname === tab.url;

        return (
          <Link
            key={tab.label}
            href={tab.url}
            className={cn(
              'font-semibold relative transition-all duration-300',
              isActive ? 'text-blue-600' : 'text-black hover:text-blue-600 group'
            )}
          >
            {tab.label}
            {!isActive && (
              <span
                className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
