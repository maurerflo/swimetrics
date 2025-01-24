'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@swimetrics/components/dropdown-menu';
import { Button } from '@swimetrics/components/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@swimetrics/components/avatar';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export function ProfileDropdown() {
  const { data: session } = useSession();
  const t = useTranslations('ProfileDropdownComponent');

  function getInitials(name?: string | null | undefined): string {
    if (!name) return '??';
    const [firstName, lastName] = name.split(' ');
    return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
  }

  if (session && session.user) {
    const { name, email, image } = session.user;

    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={image!} alt={name || 'User Avatar'} />
              <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/settings">
                {t('profile')}
                {/*<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>*/}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings">
                {t('billing')}
                {/*<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>*/}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings">
                {t('settings')}
                {/*<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>*/}
              </Link>
            </DropdownMenuItem>
            {/*<DropdownMenuItem>New Team</DropdownMenuItem>*/}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
            {t('logout')}
            {/*<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>*/}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
