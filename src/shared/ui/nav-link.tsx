'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface Props extends LinkProps {
  alias: string;
  className?: string;
}

export const NavLink = ({ alias, href, className, ...props }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`transition-all duration-150 ease-in-out ${pathname === href ? 'text-primary font-semibold' : 'hover:bg-primary'} ${className}`}
      {...props}>
      {alias}
    </Link>
  );
};
