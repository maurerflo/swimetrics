import { Avatar, AvatarFallback, AvatarImage } from '@swimetrics/components/avatar';

interface UserAvatarProps {
  name?: string | null;
  image?: string | null;
}

export function UserAvatar({ name, image }: UserAvatarProps) {
  function getInitials(name?: string | null): string {
    if (!name) return '??';
    const [firstName, lastName] = name.split(' ');
    return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
  }

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={image!} alt={name || 'User Avatar'} />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );
}
