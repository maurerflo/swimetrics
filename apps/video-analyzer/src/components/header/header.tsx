import React from 'react';
import { SidebarTrigger } from '@swimetrics/components/sidebar';
import { Separator } from '@swimetrics/components/separator';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="h-16 flex items-center justify-between px-6">
      <SidebarTrigger variant="secondary" className="scale-125 sm:scale-100" />
      <Separator orientation="vertical" className="h-6" />
      {children}
    </header>
  );
};

Header.displayName = 'Header';
