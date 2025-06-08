import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FeatureCard } from './ExampleComponent';

const mockFeature = {
  title: 'Test Feature',
  description: 'This is a test feature description that demonstrates the component functionality.',
  status: 'active' as const,
};

describe('FeatureCard', () => {
  it('should render feature information correctly', () => {
    render(<FeatureCard {...mockFeature} />);

    expect(screen.getByText('Test Feature')).toBeInTheDocument();
    expect(screen.getByText(mockFeature.description)).toBeInTheDocument();
    expect(screen.getByText('active')).toBeInTheDocument();
  });

  it('should display correct status badge variants', () => {
    const { rerender } = render(<FeatureCard {...mockFeature} status='active' />);
    expect(screen.getByText('active')).toBeInTheDocument();

    rerender(<FeatureCard {...mockFeature} status='planned' />);
    expect(screen.getByText('planned')).toBeInTheDocument();

    rerender(<FeatureCard {...mockFeature} status='beta' />);
    expect(screen.getByText('beta')).toBeInTheDocument();
  });

  it('should toggle expanded state when Read More button is clicked', () => {
    render(<FeatureCard {...mockFeature} />);

    const toggleButton = screen.getByRole('button', { name: /read more/i });
    fireEvent.click(toggleButton);

    expect(screen.getByText('Show Less')).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText('Read More')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const customClass = 'custom-feature-class';
    render(<FeatureCard {...mockFeature} className={customClass} />);

    // Find the Card component (outermost div with transition-all class)
    const card = screen.getByText('Test Feature').closest('div[class*="transition-all"]');
    expect(card).toHaveClass(customClass);
  });

  it('should start in collapsed state', () => {
    render(<FeatureCard {...mockFeature} />);

    expect(screen.getByText('Read More')).toBeInTheDocument();
    expect(screen.queryByText('Show Less')).not.toBeInTheDocument();
  });
});
