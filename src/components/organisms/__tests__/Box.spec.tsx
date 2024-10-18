import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Box from '@/components/organisms/Box';
import Card from '@/components/molecules/Card';

describe('Box component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <Box 
        startColumn={1}
        startRow={1}
        spanColumn={2}
        spanRow={2}
        content={<Card content="Test content" />}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
