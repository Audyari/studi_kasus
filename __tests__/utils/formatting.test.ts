import {
  formatCurrency,
  formatDate,
  formatRelativeTime,
} from '@/utils/formatting';

describe('Formatting Utilities', () => {
  describe('formatCurrency', () => {
    it('formats amount correctly', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    it('formats amount with different currency', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
    });

    it('formats negative amount', () => {
      expect(formatCurrency(-1234.56)).toBe('-$1,234.56');
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2023-01-01');
      expect(formatDate(date)).toBe('Jan 1, 2023');
    });

    it('formats date with custom options', () => {
      const date = new Date('2023-01-01');
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      expect(formatDate(date, options)).toBe('January 1, 2023');
    });

    it('formats date string', () => {
      expect(formatDate('2023-01-01')).toBe('Jan 1, 2023');
    });
  });

  describe('formatRelativeTime', () => {
    beforeEach(() => {
      // Mock Date.now to have consistent tests
      jest.useFakeTimers();
      jest.setSystemTime(new Date(2023, 0, 1, 12, 0, 0)); // Jan 1, 2023, 12:00:00
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('formats "Just now" for recent dates', () => {
      const now = new Date();
      expect(formatRelativeTime(now)).toBe('Just now');
    });

    it('formats "X minutes ago" for dates within an hour', () => {
      const fiveMinsAgo = new Date(2023, 0, 1, 11, 55, 0); // 5 minutes ago
      expect(formatRelativeTime(fiveMinsAgo)).toBe('5 minutes ago');
    });

    it('formats "X hours ago" for dates within a day', () => {
      const twoHoursAgo = new Date(2023, 0, 1, 10, 0, 0); // 2 hours ago
      expect(formatRelativeTime(twoHoursAgo)).toBe('2 hours ago');
    });

    it('formats "X days ago" for dates beyond a day', () => {
      const threeDaysAgo = new Date(2022, 11, 29, 12, 0, 0); // 3 days ago
      expect(formatRelativeTime(threeDaysAgo)).toBe('3 days ago');
    });
  });
});
