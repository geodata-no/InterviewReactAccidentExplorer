import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import HomeTask from './HomeTask';

describe('HomeTask', () => {
  // eksempel på en test
  it('renders header', () => {
    render(<HomeTask />);

    // check if Hometask components renders headline
    const linkElement = screen.getByText(/HomeTask: Accidents Explorer/i);
    expect(linkElement).toBeInTheDocument();
  });
});
