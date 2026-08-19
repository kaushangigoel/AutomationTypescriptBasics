import { beforeEach, describe, expect, it, xit } from '@jest/globals';
import { DuplicateTests } from '../../src/automation/DuplicateTests';

describe('DuplicateTests', () => {
  let duplicateTests: DuplicateTests;

  beforeEach(() => {
    duplicateTests = new DuplicateTests();
  });

  it('returns an empty array when there are no duplicates', () => {
    expect(
      duplicateTests.findDuplicates(['Login', 'Search', 'Checkout'])
    ).toEqual([]);
  });

  xit('finds one duplicate', () => {
    expect(
      duplicateTests.findDuplicates(['Login', 'Search', 'Login'])
    ).toEqual(['Login']);
  });

  xit('finds multiple duplicates', () => {
    expect(
      duplicateTests.findDuplicates([
        'Login',
        'Search',
        'Login',
        'Checkout',
        'Search'
      ])
    ).toEqual(['Login', 'Search']);
  });

  xit('does not return the same duplicate more than once', () => {
    expect(
      duplicateTests.findDuplicates([
        'Login',
        'Login',
        'Login'
      ])
    ).toEqual(['Login']);
  });

  xit('handles an empty array', () => {
    expect(duplicateTests.findDuplicates([])).toEqual([]);
  });
});