import { render, screen } from '@testing-library/react';
import ViewPokemon from './viewPokemon';

test('renders learn react link', () => {
  render(<ViewPokemon />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
