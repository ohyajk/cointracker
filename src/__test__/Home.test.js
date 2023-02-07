import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import Home from '../Components/Home';
import '@testing-library/jest-dom/extend-expect';

test('should render Home', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

test('should render snap', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('home-1')).toHaveTextContent('Snap');
});
