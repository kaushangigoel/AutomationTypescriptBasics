export interface LoginData { username: string; password: string; }
export interface TestCaseData { name: string; enabled: boolean; }

export class AutomationUtils {
    /** Both username and password must contain non-whitespace characters. */
    isValidLoginData(data: LoginData): boolean {
        return data.username.trim() !== "" && data.password.trim() !== "";
    }

    /** Filter test data to cases enabled for execution. */
    getEnabledTests(testCases: TestCaseData[]): TestCaseData[] {
        return testCases.filter(testCase => testCase.enabled);
    }

    /** A test runs only when enabled and not explicitly excluded. */
    shouldRunTest(enabled: boolean, excluded: boolean): boolean {
        return enabled && !excluded;
    }

    /** Find duplicate names, returning each duplicate only once. */
    findDuplicateTestNames(testNames: string[]): string[] {
        const seen = new Set<string>();
        const duplicates = new Set<string>();
        for (const name of testNames) {
            if (seen.has(name)) duplicates.add(name);
            else seen.add(name);
        }
        return [...duplicates];
    }

    /** Validate required environment/test configuration values before execution. */
    hasRequiredEnvironment(baseUrl: string, username: string, password: string): boolean {
        return baseUrl.trim() !== "" && username.trim() !== "" && password.trim() !== "";
    }
}
