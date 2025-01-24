import React from 'react';

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => (
  <main className="flex-1 p-6 overflow-auto">{children}</main>
);

Main.displayName = 'Main';
