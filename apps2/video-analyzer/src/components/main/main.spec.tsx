import { render, screen } from '@testing-library/react';
import { Main } from './main';

describe('Main', () => {
  it('renders the main element', () => {
    render(<Main>Test Content</Main>);

    // Check if the main element is rendered
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('renders children passed to it', () => {
    render(<Main>
      <div data-testid="child-content">Child Content</div>
    </Main>);

    // Check if the child content is rendered
    const childContent = screen.getByTestId('child-content');
    expect(childContent).toBeInTheDocument();
    expect(childContent).toHaveTextContent('Child Content');
  });

  it('applies the correct classes', () => {
    const { container } = render(<Main>Test Content</Main>);

    // Check if the main element has the correct classes
    const mainElement = container.querySelector('main');
    expect(mainElement).toHaveClass('flex-1 p-6 overflow-auto');
  });
});
