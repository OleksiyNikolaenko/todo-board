'use client';

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  NavLink,
} from '@/shared/ui';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';
import { HEADER_NAV_LINK } from '../model/constants/HEADER';

export const Menu = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setVisible((prev) => !prev)}>
        <AlignJustify size={40} />
      </Button>

      <Drawer direction="right" open={isVisible} onOpenChange={setVisible}>
        <DrawerHeader className="sr-only">
          <DrawerTitle>menu</DrawerTitle>
          <DrawerDescription>todo mobile menu</DrawerDescription>
        </DrawerHeader>
        <DrawerContent>
          <DrawerClose asChild>
            <div className="flex justify-end px-1 py-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setVisible(false)}>
                <X size={40} />
              </Button>
            </div>
          </DrawerClose>

          <ul className="flex h-screen flex-col items-center justify-center gap-3">
            {HEADER_NAV_LINK.map((link) => (
              <li key={link.href} className="">
                <NavLink href={link.href} alias={link.label} />
              </li>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </>
  );
};
