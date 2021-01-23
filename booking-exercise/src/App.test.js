import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from './store';

import App from './App';

test('renders Search link', () => {
  render(<Provider store={configureStore()}><App /></Provider>);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Origin cities', () => {
  render(<Provider store={configureStore()}><App /></Provider>);
  const originElement = screen.getByPlaceholderText(/From/i);
  expect(originElement).toBeInTheDocument();
});

test('renders Destination cities', () => {
  render(<Provider store={configureStore()}><App /></Provider>);
  const destElement = screen.getByPlaceholderText(/To/i);
  expect(destElement).toBeInTheDocument();
});
