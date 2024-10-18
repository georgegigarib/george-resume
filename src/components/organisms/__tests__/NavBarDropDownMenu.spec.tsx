import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NavBarDropdownMenu from '@/components/organisms/NavBarDropdownMenu';
import AppTestProvider from '@/AppTestProvider/AppTestProvider';

describe('DropdownMenu Component', () => {
  const renderComponent = () =>
    render(
      <AppTestProvider>
        <NavBarDropdownMenu />
      </AppTestProvider>,
    );

  it('matches snapshot', () => {
    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();

    const menuButton = screen.getByLabelText('menu');
    expect(menuButton).toBeVisible();
  });

  it('opens the menu when the button is clicked', () => {
    const { asFragment } = renderComponent();

    const menuButton = screen.getByLabelText('menu');
    fireEvent.click(menuButton);

    expect(asFragment()).toMatchSnapshot();

    const themeSwitcher = screen.getByTestId('theme-switch-checkbox');
    const languageSwitcher = screen.getByTestId('language-switcher');

    expect(themeSwitcher).toBeVisible();
    expect(languageSwitcher).toBeVisible();
  });

  it('closes the menu when clicked outside', () => {
    const { asFragment } = renderComponent();

    const menuButton = screen.getByLabelText('menu');
    fireEvent.click(menuButton); // Abre el menú

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(document.body); // Simula clic fuera del menú
    fireEvent.click(document.body); // Simula clic fuera del menú

    const themeSwitcher = screen.queryByTestId('theme-switcher');

    expect(themeSwitcher).not.toBeInTheDocument();
  });
});
