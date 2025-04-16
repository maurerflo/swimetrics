'use client';
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@swimetrics/components/dropdown-menu';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { signOut } from 'next-auth/react';

interface DropdownMenuItemsProps {
  name?: string | null;
  email?: string | null;
}

export function ProfileDropdownMenuItems({ name, email }: DropdownMenuItemsProps) {
  const t = useTranslations('ProfileDropdownComponent');

  return (
    <>
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-xs leading-none text-muted-foreground">{email}</p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <Link href="/settings">{t('profile')}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings">{t('billing')}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings">{t('settings')}</Link>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
        {t('logout')}
      </DropdownMenuItem>
    </>
  );
}
