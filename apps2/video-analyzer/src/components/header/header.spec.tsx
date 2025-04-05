import { render, screen } from '@testing-library/react';
import { Header } from './header';

// Mock child components to isolate the Header's behavior
jest.mock('@swimetrics/components/sidebar', () => ({
  SidebarTrigger: jest.fn(() => (
    <div data-testid="sidebar-trigger">Sidebar Trigger</div>
  )),
}));

jest.mock('@swimetrics/components/separator', () => ({
  Separator: jest.fn(() => <div data-testid="separator">Separator</div>),
}));

describe('Header', () => {
  it('renders SidebarTrigger and Separator components', () => {
    render(<Header>Test Content</Header>);

    // Check if SidebarTrigger and Separator are rendered
    expect(screen.getByTestId('sidebar-trigger')).toBeInTheDocument();
    expect(screen.getByTestId('separator')).toBeInTheDocument();
  });

  it('renders children passed to the Header', () => {
    render(
      <Header>
        <div data-testid="child-content">Child Content</div>
      </Header>
    );

    // Check if the children are rendered
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('applies the correct styles to the header', () => {
    const { container } = render(<Header>Test Content</Header>);

    // Ensure the header has the correct class
    const headerElement = container.querySelector('header');
    expect(headerElement).toHaveClass(
      'h-16 flex items-center justify-between px-6'
    );
  });
});
