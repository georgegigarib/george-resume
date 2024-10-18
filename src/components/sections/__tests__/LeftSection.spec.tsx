import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import AppTestProvider from '@/AppTestProvider/AppTestProvider';
import LeftSection from '../LeftSection';

const isMobileMock = vi.fn();

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: () => isMobileMock(),
}));

describe('LeftSection component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <LeftSection />
      </AppTestProvider>
    );

  it('renders correctly on desktop', () => {
    isMobileMock.mockReturnValue(false);

    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
});
