export interface TestUser {
  name: string;
  role: string;
  active: boolean;
  age: number;
}

export class TestDataUtils {
  /**
   * Return all active users.
   */
  getActiveUsers(users: TestUser[]): TestUser[] {
    // TODO: Use a loop and condition.
    return [];
  }

  /**
   * Return all users with role "admin".
   */
  getAdmins(users: TestUser[]): TestUser[] {
    // TODO: Use a loop and comparison.
    return [];
  }

  /**
   * Return all active administrators.
   *
   * A user must satisfy BOTH:
   * - role is "admin"
   * - active is true
   */
  getActiveAdmins(users: TestUser[]): TestUser[] {
    // TODO: Use comparison and logical AND.
    return [];
  }

  /**
   * Return users eligible for testing.
   *
   * A user is eligible when:
   * - active is true
   * - age is 18 or greater
   */
  getEligibleUsers(users: TestUser[]): TestUser[] {
    // TODO: Use comparison and logical AND.
    return [];
  }

  /**
   * Return the names of all inactive users.
   */
  getInactiveUserNames(users: TestUser[]): string[] {
    // TODO: Use a loop and condition.
    return [];
  }
}