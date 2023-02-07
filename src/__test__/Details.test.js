import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import Details from '../Components/Details';
import '@testing-library/jest-dom/extend-expect';

test('should render Details', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
test('should render Rank', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByTestId('Details-1')).toHaveTextContent('Rank');
});
