import { describe, it, expect } from 'vitest';
import {
  CoveredCallStrategy,
  OptionPosition,
  Stock,
  UserProfile,
  CoveredCallStrategy as CCS,
} from './domain-models';

describe('Domain Models - Type Validation', () => {
  describe('Stock', () => {
    it('should create a valid stock object', () => {
      const stock: Stock = {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 150.25,
        change: 2.15,
        changePercent: 1.45,
      };

      expect(stock.symbol).toBe('AAPL');
      expect(stock.price).toBeGreaterThan(0);
      expect(typeof stock.name).toBe('string');
    });

    it('stock object should have required properties', () => {
      const stock: Stock = {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        price: 140.5,
        change: -1.0,
        changePercent: -0.7,
      };

      expect(stock).toHaveProperty('symbol');
      expect(stock).toHaveProperty('name');
      expect(stock).toHaveProperty('price');
      expect(stock).toHaveProperty('change');
      expect(stock).toHaveProperty('changePercent');
    });
  });

  describe('OptionPosition', () => {
    it('should create a valid option position', () => {
      const position: OptionPosition = {
        id: 'pos-001',
        userId: 'user-123',
        symbol: 'AAPL',
        type: 'call',
        strikePrice: 155.0,
        expirationDate: '2026-02-28',
        quantity: 1,
        entryPrice: 2.5,
        currentPrice: 3.2,
        pnl: 70,
        pnlPercent: 28.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(position.symbol).toBe('AAPL');
      expect(['call', 'put']).toContain(position.type);
      expect(position.quantity).toBeGreaterThan(0);
    });

    it('should track both call and put positions', () => {
      const callPosition: OptionPosition = {
        id: 'pos-001',
        userId: 'user-123',
        symbol: 'AAPL',
        type: 'call',
        strikePrice: 155.0,
        expirationDate: '2026-02-28',
        quantity: 1,
        entryPrice: 2.5,
        currentPrice: 3.2,
        pnl: 70,
        pnlPercent: 28.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const putPosition: OptionPosition = {
        id: 'pos-002',
        userId: 'user-123',
        symbol: 'AAPL',
        type: 'put',
        strikePrice: 145.0,
        expirationDate: '2026-02-28',
        quantity: 1,
        entryPrice: 1.5,
        currentPrice: 1.8,
        pnl: 30,
        pnlPercent: 20.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(callPosition.type).toBe('call');
      expect(putPosition.type).toBe('put');
    });
  });

  describe('CoveredCallStrategy', () => {
    it('should create a valid covered call strategy', () => {
      const strategy: CoveredCallStrategy = {
        id: 'ccs-001',
        userId: 'user-123',
        symbol: 'AAPL',
        currentPrice: 150.25,
        sharesOwned: 100,
        strikePrice: 155.0,
        expirationDate: '2026-02-28',
        callPremium: 2.5,
        netReturn: 252.5,
        netReturnPercent: 1.68,
        daysToExpiration: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(strategy.symbol).toBe('AAPL');
      expect(strategy.sharesOwned).toBeGreaterThan(0);
      expect(strategy.strikePrice).toBeGreaterThan(strategy.currentPrice);
      expect(strategy.daysToExpiration).toBeGreaterThan(0);
    });

    it('should calculate return correctly', () => {
      const strategy: CoveredCallStrategy = {
        id: 'ccs-001',
        userId: 'user-123',
        symbol: 'AAPL',
        currentPrice: 150.0,
        sharesOwned: 100,
        strikePrice: 155.0,
        expirationDate: '2026-02-28',
        callPremium: 2.5,
        netReturn: 250.0, // 100 shares * $2.50 premium
        netReturnPercent: 1.67, // (250 / 15000) * 100
        daysToExpiration: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const expectedReturn = 250;
      expect(strategy.netReturn).toBe(expectedReturn);
    });
  });

  describe('UserProfile', () => {
    it('should create a valid user profile', () => {
      const profile: UserProfile = {
        uid: 'user-123',
        email: 'user@example.com',
        displayName: 'John Trader',
        photoURL: 'https://example.com/photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        preferences: {
          defaultStrategy: 'covered-call',
          riskTolerance: 'medium',
        },
      };

      expect(profile.email).toContain('@');
      expect(profile.uid).toBeDefined();
      expect(['low', 'medium', 'high']).toContain(
        profile.preferences?.riskTolerance
      );
    });

    it('should handle optional preferences', () => {
      const profileWithoutPrefs: UserProfile = {
        uid: 'user-124',
        email: 'user2@example.com',
        displayName: 'Jane Trader',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(profileWithoutPrefs.preferences).toBeUndefined();
    });
  });
});
