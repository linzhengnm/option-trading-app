/**
 * Domain models and types for the option trading app
 */

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface CoveredCallStrategy {
  id: string;
  userId: string;
  symbol: string;
  currentPrice: number;
  sharesOwned: number;
  strikePrice: number;
  expirationDate: string;
  callPremium: number;
  netReturn: number;
  netReturnPercent: number;
  daysToExpiration: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OptionPosition {
  id: string;
  userId: string;
  symbol: string;
  type: 'call' | 'put';
  strikePrice: number;
  expirationDate: string;
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercent: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OptionStrategy {
  id: string;
  name: string;
  description: string;
  type: 'covered-call' | 'leaps' | 'spread' | 'custom';
  positions: OptionPosition[];
}

export interface WatchlistItem {
  id: string;
  userId: string;
  symbol: string;
  addedAt: Date;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
  preferences?: {
    defaultStrategy: string;
    riskTolerance: 'low' | 'medium' | 'high';
  };
}
