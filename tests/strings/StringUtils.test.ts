import { beforeEach, describe, expect, it, xit } from '@jest/globals';
import { StringUtils } from '../../src/strings/StringUtils';

describe('StringUtils', () => {
  let stringUtils: StringUtils;

  beforeEach(() => {
    stringUtils = new StringUtils();
  });

  describe('reverse()', () => {
    it('handles an empty string', () => {
      expect(stringUtils.reverse('')).toBe('');
    });

    xit('reverses a simple string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });

    xit('reverses a Playwright related string', () => {
      expect(stringUtils.reverse('playwright')).toBe('thgirwyalp');
    });

    xit('reverses a string containing spaces', () => {
      expect(stringUtils.reverse('hello world')).toBe('dlrow olleh');
    });

    xit('reverses a single character', () => {
      expect(stringUtils.reverse('A')).toBe('A');
    });
  });

  describe('isPalindrome()', () => {
    it('returns true for a palindrome', () => {
      expect(stringUtils.isPalindrome('madam')).toBe(true);
    });

    xit('returns false for a non-palindrome', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
    });

    xit('returns true for a single character', () => {
      expect(stringUtils.isPalindrome('A')).toBe(true);
    });

    xit('returns true for an empty string', () => {
      expect(stringUtils.isPalindrome('')).toBe(true);
    });

    xit('handles numeric-looking strings', () => {
      expect(stringUtils.isPalindrome('12321')).toBe(true);
    });
  });

  describe('countWords()', () => {
    it('returns zero for an empty string', () => {
      expect(stringUtils.countWords('')).toBe(0);
    });

    xit('counts words in a sentence', () => {
      expect(stringUtils.countWords('Playwright is powerful')).toBe(3);
    });

    xit('counts a single word', () => {
      expect(stringUtils.countWords('Playwright')).toBe(1);
    });

    xit('handles multiple spaces', () => {
      expect(stringUtils.countWords('Playwright   automation testing')).toBe(3);
    });

    xit('handles leading and trailing spaces', () => {
      expect(stringUtils.countWords('  Automation makes testing faster  ')).toBe(4);
    });
  });

  describe('capitalize()', () => {
    xit('capitalizes a lowercase word', () => {
      expect(stringUtils.capitalize('playwright')).toBe('Playwright');
    });

    xit('keeps an already capitalized word unchanged', () => {
      expect(stringUtils.capitalize('Playwright')).toBe('Playwright');
    });

    xit('handles a single character', () => {
      expect(stringUtils.capitalize('a')).toBe('A');
    });

    xit('handles an empty string', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });

    xit('capitalizes an automation term', () => {
      expect(stringUtils.capitalize('automation')).toBe('Automation');
    });
  });

  describe('countCharacter()', () => {
    xit('counts a character appearing multiple times', () => {
      expect(stringUtils.countCharacter('automation', 'a')).toBe(2);
    });

    xit('returns zero when character does not exist', () => {
      expect(stringUtils.countCharacter('playwright', 'z')).toBe(0);
    });

    xit('counts a character appearing once', () => {
      expect(stringUtils.countCharacter('testing', 'e')).toBe(1);
    });

    xit('handles repeated characters', () => {
      expect(stringUtils.countCharacter('aaaa', 'a')).toBe(4);
    });

    xit('handles an empty string', () => {
      expect(stringUtils.countCharacter('', 'a')).toBe(0);
    });
  });
});