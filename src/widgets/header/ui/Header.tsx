import { NavLink } from '@/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { HEADER_NAV_LINK } from '../model/constants/HEADER';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <header className="py-2 shadow">
      <nav className="container mx-auto flex items-center justify-between px-1">
        <Link className="group flex items-center gap-2 font-medium" href="/">
          <Image src="/icons/logo.svg" alt="" width={40} height={40} />
          <div className="hidden sm:flex sm:flex-col">
            <span>Amazing Workspace</span>
            <span className="group-hover:text-primary font-semibold md:transition-all md:duration-200 md:ease-in-out">
              Todo Board
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex md:gap-3">
          {HEADER_NAV_LINK.map((link) => (
            <li key={link.href} className="">
              <NavLink href={link.href} alias={link.label} />
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-3">
          <li>
            <Link
              href="/signin"
              className="md:bg-primary/20 bg-primary md:text-primary md:hover:bg-primary smd:ease-in-out rounded-md p-2 text-white md:transition-all md:duration-200 md:hover:text-white">
              Sign In
            </Link>
          </li>
          <li className="md:hidden">
            <Menu />
          </li>
        </ul>
      </nav>
    </header>
  );
};
