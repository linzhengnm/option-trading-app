import { render } from '@testing-library/react';

import OptionTradingAuth from './auth';

describe('OptionTradingAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OptionTradingAuth />);
    expect(baseElement).toBeTruthy();
  });
});
