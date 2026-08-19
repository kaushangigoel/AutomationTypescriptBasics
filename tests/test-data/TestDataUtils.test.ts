import { beforeEach, describe, expect, it, xit } from '@jest/globals';
import { TestDataUtils, TestUser } from '../../src/test-data/TestDataUtils';

describe('TestDataUtils', () => {
  let testDataUtils: TestDataUtils;

  const users: TestUser[] = [
    { name: 'Amit', role: 'admin', active: true, age: 30 },
    { name: 'John', role: 'user', active: true, age: 25 },
    { name: 'Sarah', role: 'admin', active: false, age: 32 },
    { name: 'David', role: 'user', active: false, age: 17 },
    { name: 'Priya', role: 'user', active: true, age: 16 }
  ];

  beforeEach(() => {
    testDataUtils = new TestDataUtils();
  });

  describe('getActiveUsers()', () => {
    it('returns all active users', () => {
      expect(testDataUtils.getActiveUsers(users)).toEqual([
        users[0],
        users[1],
        users[4]
      ]);
    });

    xit('returns an empty array when all users are inactive', () => {
      const inactiveUsers = users.map(user => ({ ...user, active: false }));
      expect(testDataUtils.getActiveUsers(inactiveUsers)).toEqual([]);
    });

    xit('handles an empty array', () => {
      expect(testDataUtils.getActiveUsers([])).toEqual([]);
    });
  });

  describe('getAdmins()', () => {
    xit('returns all administrators', () => {
      expect(testDataUtils.getAdmins(users)).toEqual([
        users[0],
        users[2]
      ]);
    });

    xit('returns an empty array when there are no administrators', () => {
      const nonAdmins = users.map(user => ({ ...user, role: 'user' }));
      expect(testDataUtils.getAdmins(nonAdmins)).toEqual([]);
    });

    xit('includes inactive administrators', () => {
      expect(testDataUtils.getAdmins(users).some(user => user.name === 'Sarah')).toBe(true);
    });
  });

  describe('getActiveAdmins()', () => {
    xit('returns only active administrators', () => {
      expect(testDataUtils.getActiveAdmins(users)).toEqual([users[0]]);
    });

    xit('does not include inactive administrators', () => {
      expect(testDataUtils.getActiveAdmins(users).some(user => user.name === 'Sarah')).toBe(false);
    });

    xit('does not include active non-admin users', () => {
      expect(testDataUtils.getActiveAdmins(users).some(user => user.name === 'John')).toBe(false);
    });
  });

  describe('getEligibleUsers()', () => {
    xit('returns active users aged 18 or above', () => {
      expect(testDataUtils.getEligibleUsers(users)).toEqual([
        users[0],
        users[1]
      ]);
    });

    xit('excludes inactive users', () => {
      expect(testDataUtils.getEligibleUsers(users).some(user => user.name === 'David')).toBe(false);
    });

    xit('excludes users below 18', () => {
      expect(testDataUtils.getEligibleUsers(users).some(user => user.name === 'Priya')).toBe(false);
    });
  });

  describe('getInactiveUserNames()', () => {
    xit('returns names of inactive users', () => {
      expect(testDataUtils.getInactiveUserNames(users)).toEqual([
        'Sarah',
        'David'
      ]);
    });

    xit('returns an empty array when all users are active', () => {
      const activeUsers = users.map(user => ({ ...user, active: true }));
      expect(testDataUtils.getInactiveUserNames(activeUsers)).toEqual([]);
    });

    xit('handles an empty array', () => {
      expect(testDataUtils.getInactiveUserNames([])).toEqual([]);
    });
  });
});