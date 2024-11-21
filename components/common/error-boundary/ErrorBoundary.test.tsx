import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './index';

// Mock component that throws an error
const ProblemChild = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('renders children without error', () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('renders fallback UI on error', () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(screen.getByText('Oops, there is an error!')).toBeInTheDocument();
  });
});