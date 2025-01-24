import { render, screen } from '@testing-library/react';
import { UserAvatar } from './user-avatar';

describe('UserAvatar', () => {
  it('renders the avatar image if provided', () => {
    render(<UserAvatar name="John Doe" image="https://example.com/avatar.jpg" />);
    const avatarImage = screen.getByAltText('John Doe');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders initials if no image is provided', () => {
    render(<UserAvatar name="John Doe" />);
    const fallback = screen.getByText('JD');
    expect(fallback).toBeInTheDocument();
  });

  it('renders fallback initials if no name is provided', () => {
    render(<UserAvatar />);
    const fallback = screen.getByText('??');
    expect(fallback).toBeInTheDocument();
  });
});
