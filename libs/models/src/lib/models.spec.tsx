import { render } from '@testing-library/react';

import OptionTradingModels from './models';

describe('OptionTradingModels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OptionTradingModels />);
    expect(baseElement).toBeTruthy();
  });
});
