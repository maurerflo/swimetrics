import { render, screen } from '@testing-library/react';
import { ProfileDropdownMenuItems } from './profile-dropdown-menu-itmes';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => (key: string) => key),
}));

describe('DropdownMenuItems', () => {
  it('renders the user name and email', () => {
    render(<ProfileDropdownMenuItems name="John Doe" email="john@example.com" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('renders menu items with translations', () => {
    render(<ProfileDropdownMenuItems name="John Doe" email="john@example.com" />);
    expect(
      screen.getByText('ProfileDropdownComponent.profile')
    ).toBeInTheDocument();
    expect(
      screen.getByText('ProfileDropdownComponent.billing')
    ).toBeInTheDocument();
    expect(
      screen.getByText('ProfileDropdownComponent.settings')
    ).toBeInTheDocument();
  });

  it('renders a logout button', () => {
    render(<ProfileDropdownMenuItems name="John Doe" email="john@example.com" />);
    expect(
      screen.getByText('ProfileDropdownComponent.logout')
    ).toBeInTheDocument();
  });
});
