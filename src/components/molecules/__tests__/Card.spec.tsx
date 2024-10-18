import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from '@/components/molecules/Card'; // Asegúrate de que la ruta sea correcta

describe('Card component', () => {
  it('renders the content passed as props', () => {
    const { getByText } = render(<Card content="Test Content" />);
    
    // Verifica que el contenido específico esté presente en el documento
    const contentElement = getByText('Test Content');

    // Verifica que el elemento existe
    expect(contentElement).toBeTruthy(); // O podrías usar cualquier otro matcher según tu preferencia
  });

  it('renders with the correct classes', () => {
    const { container } = render(<Card content="Test Content" />);
    
    // Verifica que las clases se apliquen correctamente
    expect(container.querySelector('.bg-gray-50')).toBeTruthy(); // Verifica si una clase específica está presente
  });
});
