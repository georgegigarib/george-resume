import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import SeeResume from '@/components/organisms/SeeResume';
import AppTestProvider from '@/AppTestProvider/AppTestProvider';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useLanguage } from '@/hooks/useLanguage';
import '@testing-library/jest-dom';

vi.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}));

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

describe('SeeResume Component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <SeeResume />
      </AppTestProvider>
    );

  it('renders correctly for mobile', () => {
    (useIsMobile as Mock).mockReturnValue(true);

    (useLanguage as Mock).mockReturnValue({ currentLanguage: 'en' });

    const { asFragment } = renderComponent();

    const resumeText = screen.getByTestId('resume-button-text') as HTMLInputElement;

    expect(resumeText.textContent).toBe('See resume');
    expect(screen.getByRole('link')).toHaveAttribute('href', expect.stringContaining('Resume.pdf'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly for desktop', () => {
    (useIsMobile as Mock).mockReturnValue(false);

    (useLanguage as Mock).mockReturnValue({ currentLanguage: 'es' });

    const { asFragment } = renderComponent();

    const resumeIcon = screen.getByAltText('Resume Icon');
    const resumeText = screen.getByTestId('resume-button-text') as HTMLInputElement;

    expect(resumeIcon).toHaveAttribute('width', '80');
    expect(resumeIcon).toHaveAttribute('height', '80');

    expect(resumeText).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', expect.stringContaining('CV.pdf'));
    expect(asFragment()).toMatchSnapshot();
  });
});
