import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ThemeSwitch from '@/components/atoms/ThemeSwitch';

describe('ThemeSwitch component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<ThemeSwitch checked={true} onChange={() => {}} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with the correct initial checked state', () => {
    const { getByTestId } = render(<ThemeSwitch checked={true} onChange={() => {}} />);
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement;

    expect(checkbox.checked).toBe(true);
  });

  it('calls onChange when the checkbox is clicked', () => {
    const handleChange = vi.fn();
    const { getByTestId } = render(<ThemeSwitch checked={false} onChange={handleChange} />);
    const checkbox = getByTestId('theme-switch-checkbox') as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });

  it('applies the correct size based on the size prop', () => {
    const size = 60;
    const { container } = render(<ThemeSwitch checked={false} onChange={() => {}} size={size} />);
    const labelElement = container.querySelector('.theme-switch') as HTMLElement;

    expect(labelElement.style.getPropertyValue('--toggle-size')).toBe(`${size}px`);
  });
});
