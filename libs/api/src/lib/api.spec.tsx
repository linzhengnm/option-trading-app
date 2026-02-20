import { render } from '@testing-library/react';

import OptionTradingApi from './api';

describe('OptionTradingApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OptionTradingApi />);
    expect(baseElement).toBeTruthy();
  });
});
