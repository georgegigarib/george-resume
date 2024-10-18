import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CardBody } from '@/components/atoms/CardBody';

describe('CardBody component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <CardBody className="custom-class">
        <p>Test content</p>
      </CardBody>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
