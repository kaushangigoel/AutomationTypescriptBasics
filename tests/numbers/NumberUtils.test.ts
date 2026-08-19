import { beforeEach, describe, expect, it, xit } from '@jest/globals';
import { NumberUtils } from '../../src/numbers/NumberUtils';

describe('NumberUtils', () => {
  let numberUtils: NumberUtils;

  beforeEach(() => {
    numberUtils = new NumberUtils();
  });

  describe('add()', () => {
    it('adds two positive numbers', () => {
      expect(numberUtils.add(10, 20)).toBe(30);
    });

    xit('adds two negative numbers', () => {
      expect(numberUtils.add(-5, -10)).toBe(-15);
    });

    xit('adds positive and negative numbers', () => {
      expect(numberUtils.add(10, -5)).toBe(5);
    });

    xit('adds zero', () => {
      expect(numberUtils.add(10, 0)).toBe(10);
    });

    xit('adds decimal numbers', () => {
      expect(numberUtils.add(1.5, 2.5)).toBe(4);
    });
  });

  describe('subtract()', () => {
    xit('subtracts two positive numbers', () => {
      expect(numberUtils.subtract(20, 5)).toBe(15);
    });

    xit('handles a negative result', () => {
      expect(numberUtils.subtract(5, 20)).toBe(-15);
    });

    xit('subtracts a negative number', () => {
      expect(numberUtils.subtract(10, -5)).toBe(15);
    });

    xit('subtracts zero', () => {
      expect(numberUtils.subtract(10, 0)).toBe(10);
    });
  });

  describe('multiply()', () => {
    xit('multiplies two positive numbers', () => {
      expect(numberUtils.multiply(5, 4)).toBe(20);
    });

    xit('multiplies by zero', () => {
      expect(numberUtils.multiply(5, 0)).toBe(0);
    });

    xit('multiplies negative numbers', () => {
      expect(numberUtils.multiply(-5, -4)).toBe(20);
    });

    xit('multiplies positive and negative numbers', () => {
      expect(numberUtils.multiply(5, -4)).toBe(-20);
    });
  });

  describe('divide()', () => {
    xit('divides two numbers', () => {
      expect(numberUtils.divide(20, 5)).toBe(4);
    });

    xit('returns a decimal result', () => {
      expect(numberUtils.divide(5, 2)).toBe(2.5);
    });

    xit('handles division by zero', () => {
      expect(numberUtils.divide(10, 0)).toBe(0);
    });

    xit('handles negative values', () => {
      expect(numberUtils.divide(-10, 2)).toBe(-5);
    });
  });

  describe('remainder()', () => {
    xit('returns the remainder', () => {
      expect(numberUtils.remainder(10, 3)).toBe(1);
    });

    xit('returns zero for an exact division', () => {
      expect(numberUtils.remainder(10, 5)).toBe(0);
    });

    xit('handles a smaller dividend', () => {
      expect(numberUtils.remainder(3, 10)).toBe(3);
    });

    xit('handles negative values', () => {
      expect(numberUtils.remainder(-10, 3)).toBe(-1);
    });
  });

  describe('isEven()', () => {
    xit('returns true for an even number', () => {
      expect(numberUtils.isEven(10)).toBe(true);
    });

    xit('returns false for an odd number', () => {
      expect(numberUtils.isEven(7)).toBe(false);
    });

    xit('handles zero', () => {
      expect(numberUtils.isEven(0)).toBe(true);
    });

    xit('handles negative even numbers', () => {
      expect(numberUtils.isEven(-4)).toBe(true);
    });
  });

  describe('isPositive()', () => {
    xit('returns true for a positive number', () => {
      expect(numberUtils.isPositive(10)).toBe(true);
    });

    xit('returns false for a negative number', () => {
      expect(numberUtils.isPositive(-10)).toBe(false);
    });

    xit('returns false for zero', () => {
      expect(numberUtils.isPositive(0)).toBe(false);
    });

    xit('handles decimal values', () => {
      expect(numberUtils.isPositive(0.5)).toBe(true);
    });
  });

  describe('getLarger()', () => {
    xit('returns the larger number', () => {
      expect(numberUtils.getLarger(10, 20)).toBe(20);
    });

    xit('returns the first number when it is larger', () => {
      expect(numberUtils.getLarger(30, 20)).toBe(30);
    });

    xit('handles equal numbers', () => {
      expect(numberUtils.getLarger(10, 10)).toBe(10);
    });

    xit('handles negative numbers', () => {
      expect(numberUtils.getLarger(-5, -2)).toBe(-2);
    });
  });

  describe('getSmaller()', () => {
    xit('returns the smaller number', () => {
      expect(numberUtils.getSmaller(10, 20)).toBe(10);
    });

    xit('returns the second number when it is smaller', () => {
      expect(numberUtils.getSmaller(30, 20)).toBe(20);
    });

    xit('handles equal numbers', () => {
      expect(numberUtils.getSmaller(10, 10)).toBe(10);
    });

    xit('handles negative numbers', () => {
      expect(numberUtils.getSmaller(-5, -2)).toBe(-5);
    });
  });
});