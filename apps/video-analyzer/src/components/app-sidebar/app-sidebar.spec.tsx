import { render, screen } from '@testing-library/react';
import { AppSidebar } from './app-sidebar';
import { Home, Inbox, Calendar, Search, Settings } from 'lucide-react';

// Mock the @swimetrics/components/sidebar components
jest.mock('@swimetrics/components/sidebar', () => ({
  Sidebar: ({ children }: { children: React.ReactNode }) => <div data-testid="sidebar">{children}</div>,
  SidebarContent: ({ children }: { children: React.ReactNode }) => <div data-testid="sidebar-content">{children}</div>,
  SidebarGroup: ({ children }: { children: React.ReactNode }) => <div data-testid="sidebar-group">{children}</div>,
  SidebarGroupLabel: ({ children }: { children: React.ReactNode }) => <div data-testid="sidebar-group-label">{children}</div>,
  SidebarGroupContent: ({ children }: { children: React.ReactNode }) => <div data-testid="sidebar-group-content">{children}</div>,
  SidebarMenu: ({ children }: { children: React.ReactNode }) => <div data-testid="sidebar-menu">{children}</div>,
  SidebarMenuItem: ({ children }: { children: React.ReactNode }) => <div data-testid="sidebar-menu-item">{children}</div>,
  SidebarMenuButton: ({ children }: { children: React.ReactNode }) => <div data-testid="sidebar-menu-button">{children}</div>,
}));

describe('AppSidebar', () => {
  it('renders the sidebar with all menu items', () => {
    render(<AppSidebar />);

    // Ensure the sidebar renders
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    // Ensure the group label is present
    expect(screen.getByTestId('sidebar-group-label')).toHaveTextContent('Application');

    // Ensure the menu items render with correct text
    const menuItems = [
      { title: 'Home', icon: Home },
      { title: 'Inbox', icon: Inbox },
      { title: 'Calendar', icon: Calendar },
      { title: 'Search', icon: Search },
      { title: 'Settings', icon: Settings },
    ];

    menuItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('renders menu items with correct links', () => {
    render(<AppSidebar />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5); // Verify number of links

    // Check each link's href attribute
    const expectedUrls = ['#', '#', '#', '#', '#'];
    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', expectedUrls[index]);
    });
  });

});
