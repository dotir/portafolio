import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el saludo del hero', () => {
  render(<App />);
  const heading = screen.getByText(/Hola, soy Irving Llerena/i);
  expect(heading).toBeInTheDocument();
});
