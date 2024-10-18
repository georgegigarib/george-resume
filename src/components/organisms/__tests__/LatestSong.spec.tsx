import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { useIsMobile } from '@/hooks/useIsMobile';
import LatestSong from '../LatestSong';

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}));

describe('LatestSong Component', () => {
  const renderComponent = () =>
    render(<LatestSong />);

  it('matches snapshot at initial render', () => {
    (useIsMobile as Mock).mockReturnValue(false);

    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot after 5 seconds', async () => {
    vi.useFakeTimers();
    (useIsMobile as Mock).mockReturnValue(false);

    const { asFragment } = renderComponent();

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByTestId('song-test-id-1')).toBeVisible();
  });

  it('matches snapshot after another 5 seconds', async () => {
    vi.useFakeTimers();
    (useIsMobile as Mock).mockReturnValue(false);

    const { asFragment } = renderComponent();

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByTestId('song-test-id-0')).toBeVisible();
  });
});
