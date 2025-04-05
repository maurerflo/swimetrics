'use client';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@swimetrics/components/dropdown-menu';
import { Button } from '@swimetrics/components/button';

import { useSession } from 'next-auth/react';
import { UserAvatar } from './user-avatar/user-avatar';
import { ProfileDropdownMenuItems } from './profile-dropdown-menu-itmes/profile-dropdown-menu-itmes';

export function ProfileDropdown() {
  const { data: session } = useSession();

  if (!session || !session.user) return null;

  const { name, email, image } = session.user;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <UserAvatar name={name} image={image} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount >
        <ProfileDropdownMenuItems name={name} email={email} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
