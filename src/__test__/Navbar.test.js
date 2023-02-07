import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '@testing-library/jest-dom/extend-expect';

test('should render navbar', () => {
  const tree = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
test('should render CoinTracker', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(screen.getByTestId('Navbar-1')).toHaveTextContent('CoinTracker');
});
