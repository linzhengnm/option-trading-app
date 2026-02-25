import { createRoutesStub } from 'react-router';
import { render } from '@testing-library/react';
import App from '../../app/app';

test('renders the app component successfully', async () => {
  const ReactRouterStub = createRoutesStub([
    {
      path: '/',
      Component: App,
    },
  ]);

  // App should render without throwing errors
  const { container } = render(<ReactRouterStub />);
  expect(container).toBeTruthy();
});
