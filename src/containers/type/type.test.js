import { render, screen } from '@testing-library/react';
import Type from './type';

test('renders learn react link', () => {
  render(<Type />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
