import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';

test('should render navbar', () => {
  const tree = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
