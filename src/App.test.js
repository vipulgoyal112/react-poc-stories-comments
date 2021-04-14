import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Top 10 Stories/i);
  expect(linkElement).toBeInTheDocument();
});
