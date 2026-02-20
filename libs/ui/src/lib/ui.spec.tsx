import { render } from '@testing-library/react';

import OptionTradingUi from './ui';

describe('OptionTradingUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OptionTradingUi />);
    expect(baseElement).toBeTruthy();
  });
});
