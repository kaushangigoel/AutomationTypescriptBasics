import { beforeEach, describe, expect, it, xit } from '@jest/globals';
import { ArrayUtils } from '../../src/arrays/ArrayUtils';

describe('ArrayUtils', () => {
  let arrayUtils: ArrayUtils;

  beforeEach(() => {
    arrayUtils = new ArrayUtils();
  });

  describe('countItems()', () => {
    it('returns zero for an empty array', () => {
      expect(arrayUtils.countItems([])).toBe(0);
    });

    xit('counts five items', () => {
      expect(arrayUtils.countItems(['Login', 'Search', 'Checkout', 'Payment', 'Logout'])).toBe(5);
    });

    xit('counts one item', () => {
      expect(arrayUtils.countItems(['Login'])).toBe(1);
    });

    xit('counts duplicate items separately', () => {
      expect(arrayUtils.countItems(['Login', 'Login', 'Search'])).toBe(3);
    });
  });

  describe('getItemsStartingWithA()', () => {
    xit('returns items starting with A', () => {
      expect(arrayUtils.getItemsStartingWithA(['Amit', 'John', 'Anita', 'David']))
        .toEqual(['Amit', 'Anita']);
    });

    xit('returns an empty array when there are no matches', () => {
      expect(arrayUtils.getItemsStartingWithA(['John', 'David', 'Sarah']))
        .toEqual([]);
    });

    xit('handles an empty array', () => {
      expect(arrayUtils.getItemsStartingWithA([])).toEqual([]);
    });

    xit('does not include lowercase a', () => {
      expect(arrayUtils.getItemsStartingWithA(['amit', 'Anita']))
        .toEqual(['Anita']);
    });
  });

  describe('getLargestNumber()', () => {
    xit('returns the largest number', () => {
      expect(arrayUtils.getLargestNumber([10, 20, 5, 30])).toBe(30);
    });

    xit('handles negative numbers', () => {
      expect(arrayUtils.getLargestNumber([-10, -5, -20])).toBe(-5);
    });

    xit('handles an array containing one number', () => {
      expect(arrayUtils.getLargestNumber([100])).toBe(100);
    });

    xit('handles duplicate largest values', () => {
      expect(arrayUtils.getLargestNumber([10, 20, 20, 5])).toBe(20);
    });
  });

  describe('getSum()', () => {
    xit('returns the sum of positive numbers', () => {
      expect(arrayUtils.getSum([1, 2, 3, 4])).toBe(10);
    });

    xit('returns zero for an empty array', () => {
      expect(arrayUtils.getSum([])).toBe(0);
    });

    xit('handles negative numbers', () => {
      expect(arrayUtils.getSum([-1, -2, -3])).toBe(-6);
    });

    xit('handles mixed positive and negative numbers', () => {
      expect(arrayUtils.getSum([10, -5, 2])).toBe(7);
    });
  });

  describe('countEvenNumbers()', () => {
    xit('counts even numbers', () => {
      expect(arrayUtils.countEvenNumbers([1, 2, 3, 4, 6])).toBe(3);
    });

    xit('returns zero when there are no even numbers', () => {
      expect(arrayUtils.countEvenNumbers([1, 3, 5])).toBe(0);
    });

    xit('handles zero as even', () => {
      expect(arrayUtils.countEvenNumbers([0, 1, 2])).toBe(2);
    });

    xit('handles negative even numbers', () => {
      expect(arrayUtils.countEvenNumbers([-2, -3, -4])).toBe(2);
    });
  });

  describe('getValuesGreaterThan()', () => {
    xit('returns values greater than threshold', () => {
      expect(arrayUtils.getValuesGreaterThan([10, 20, 30, 40], 25))
        .toEqual([30, 40]);
    });

    xit('returns an empty array when no values match', () => {
      expect(arrayUtils.getValuesGreaterThan([10, 20], 50))
        .toEqual([]);
    });

    xit('does not include the threshold itself', () => {
      expect(arrayUtils.getValuesGreaterThan([10, 20, 30], 20))
        .toEqual([30]);
    });

    xit('handles negative numbers', () => {
      expect(arrayUtils.getValuesGreaterThan([-5, 0, 5], -1))
        .toEqual([0, 5]);
    });
  });
});