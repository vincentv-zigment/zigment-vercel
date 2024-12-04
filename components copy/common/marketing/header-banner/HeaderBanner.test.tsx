import React from 'react';
import { render } from '@testing-library/react';
import HeaderBanner from '.';

describe('HeaderBanner Component', () => {
  it('renders correctly with given props', () => {
    const { getByText } = render(
      <HeaderBanner
        title="Building the most advanced conversational sales platform"
        subtitle="About us"
        description="We help companies shorten their lead cycle times and significantly reduce the human capital required in the process."
      />
    );

    // Check if the title, subtitle, and description are rendered
    expect(getByText('Building the most advanced conversational sales platform')).toBeInTheDocument();
    expect(getByText('About us')).toBeInTheDocument();
    expect(getByText('We help companies shorten their lead cycle times and significantly reduce the human capital required in the process.')).toBeInTheDocument();
  });

  it('applies optional CSS classes correctly', () => {
    const titleCSS = 'custom-title';
    const subtitleCSS = 'custom-subtitle';
    const descriptionCSS = 'custom-description';

    const { getByText } = render(
      <HeaderBanner
        title="Test Title"
        subtitle="Test Subtitle"
        description="Test Description"
        titleCSS={titleCSS}
        subtitleCSS={subtitleCSS}
        descriptionCSS={descriptionCSS}
      />
    );

    // Check if the CSS classes are applied
    expect(getByText('Test Title')).toHaveClass(titleCSS);
    expect(getByText('Test Subtitle')).toHaveClass(subtitleCSS);
    expect(getByText('Test Description')).toHaveClass(descriptionCSS);
  });
});
