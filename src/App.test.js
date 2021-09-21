import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Title Tasker', () => {
  render(<App />);
  const linkElement = screen.getByText("Tasker");
  expect(linkElement).toBeInTheDocument();
});
