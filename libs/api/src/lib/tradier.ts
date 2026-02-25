/**
 * Tradier API service for fetching stock and options data
 * Documentation: https://documentation.tradier.com/
 */

const TRADIER_API_BASE_URL = 'https://api.tradier.com/v1';
const TRADIER_API_KEY = import.meta.env.VITE_TRADIER_API_KEY;

export interface OptionChain {
  symbol: string;
  status: string;
  expiration_date: string;
  days_to_expiration: number;
  options: Option[];
}

export interface Option {
  symbol: string;
  bid: number;
  ask: number;
  last: number;
  volume: number;
  open_interest: number;
  strike: number;
  type: 'call' | 'put';
  expiration_date: string;
  greeks?: {
    delta: number;
    gamma: number;
    theta: number;
    vega: number;
    rho: number;
  };
}

export interface StockQuote {
  symbol: string;
  last: number;
  bid: number;
  ask: number;
  change: number;
  change_percent: number;
  volume: number;
}

/**
 * Fetch option chains for a given symbol
 * @param symbol Stock symbol (e.g., 'AAPL')
 * @param expirationDate Optional specific expiration date (YYYY-MM-DD)
 */
export const getOptionChain = async (
  symbol: string,
  expirationDate?: string
): Promise<OptionChain> => {
  if (!TRADIER_API_KEY) {
    throw new Error('VITE_TRADIER_API_KEY environment variable is not set');
  }

  const url = expirationDate
    ? `${TRADIER_API_BASE_URL}/markets/options/chains?symbol=${symbol}&expiration=${expirationDate}`
    : `${TRADIER_API_BASE_URL}/markets/options/chains?symbol=${symbol}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TRADIER_API_KEY}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Tradier API error: ${response.statusText}`);
    }

    const data = (await response.json()) as { options: OptionChain };
    return data.options;
  } catch (error) {
    console.error('Error fetching option chain:', error);
    throw error;
  }
};

/**
 * Fetch option expirations for a given symbol
 * @param symbol Stock symbol (e.g., 'AAPL')
 */
export const getOptionExpirations = async (symbol: string): Promise<string[]> => {
  if (!TRADIER_API_KEY) {
    throw new Error('VITE_TRADIER_API_KEY environment variable is not set');
  }

  const url = `${TRADIER_API_BASE_URL}/markets/options/expirations?symbol=${symbol}&includeAllRoots=true`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TRADIER_API_KEY}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Tradier API error: ${response.statusText}`);
    }

    const data = (await response.json()) as { expirations: string[] };
    return data.expirations;
  } catch (error) {
    console.error('Error fetching option expirations:', error);
    throw error;
  }
};

/**
 * Fetch stock quote
 * @param symbol Stock symbol (e.g., 'AAPL')
 */
export const getStockQuote = async (symbol: string): Promise<StockQuote> => {
  if (!TRADIER_API_KEY) {
    throw new Error('VITE_TRADIER_API_KEY environment variable is not set');
  }

  const url = `${TRADIER_API_BASE_URL}/markets/quotes?symbols=${symbol}&greeks=true`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TRADIER_API_KEY}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Tradier API error: ${response.statusText}`);
    }

    const data = (await response.json()) as { quotes: { quote: StockQuote } };
    return data.quotes.quote;
  } catch (error) {
    console.error('Error fetching stock quote:', error);
    throw error;
  }
};
