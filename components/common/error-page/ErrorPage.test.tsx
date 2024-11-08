import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPage from './index';
import '@testing-library/jest-dom';

describe('ErrorPage', () => {
  it('renders with default props', () => {
    render(<ErrorPage />);
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText(`The page you are looking for doesn't exist. Here are some helpful links:`)).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(<ErrorPage heading="Custom Heading" description="Custom Description" />);
    expect(screen.getByText('Custom Heading')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });
 
});