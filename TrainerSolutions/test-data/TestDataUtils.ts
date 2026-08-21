export interface TestUser {
    username: string;
    age: number;
    active: boolean;
    role: string;
}

export class TestDataUtils {
    /** Filter the supplied data to active users. */
    getActiveUsers(users: TestUser[]): TestUser[] {
        return users.filter(user => user.active);
    }

    /** Keep users whose age is greater than or equal to minAge. */
    getUsersByMinimumAge(users: TestUser[], minAge: number): TestUser[] {
        return users.filter(user => user.age >= minAge);
    }

    /** Find users whose role exactly matches the requested role. */
    getUsersByRole(users: TestUser[], role: string): TestUser[] {
        return users.filter(user => user.role === role);
    }

    /** some() answers whether at least one matching user exists. */
    userExists(users: TestUser[], username: string): boolean {
        return users.some(user => user.username === username);
    }

    /** Filter first, then map to extract usernames. */
    getActiveUsernames(users: TestUser[]): string[] {
        return users.filter(user => user.active).map(user => user.username);
    }
}
