import { render, screen, fireEvent } from '@testing-library/react';
import { ProfileDropdown } from './profile-dropdown';
import { useSession } from 'next-auth/react';

// Mock next-auth session hook
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

// Mock child components
jest.mock('./user-avatar/user-avatar', () => ({
  UserAvatar: () => <div data-testid="user-avatar" />,
}));

jest.mock('./profile-dropdown-menu-itmes/profile-dropdown-menu-itmes', () => ({
  ProfileDropdownMenuItems: () => <div data-testid="profile-dropdown-menu-items" />,
}));

describe('ProfileDropdown', () => {
  it('renders nothing if the user is not logged in', () => {
    // Mock session as null
    (useSession as jest.Mock).mockReturnValue({ data: null });

    const { container } = render(<ProfileDropdown />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the dropdown when the user is logged in', () => {
    // Mock session with user data
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'John Doe', email: 'john@example.com', image: '' } },
    });

    render(<ProfileDropdown />);

    // Ensure the dropdown trigger (button) renders
    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();

    // Simulate clicking the dropdown trigger to open the menu
    fireEvent.click(trigger);

    // Check that the dropdown content and items are rendered
    expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
  });
});
