export class ConditionUtils {
    /** 90+ Excellent, 75-89 Good, 50-74 Pass, below 50 Fail. */
    getScoreMessage(score: number): string {
        if (score >= 90) return "Excellent";
        if (score >= 75) return "Good";
        if (score >= 50) return "Pass";
        return "Fail";
    }

    /** Eligible when age is at least 60 OR the customer is a member. */
    isEligibleForDiscount(age: number, isMember: boolean): boolean {
        return age >= 60 || isMember;
    }

    /** Classify a number using >, < and equality through the final branch. */
    classifyNumber(value: number): string {
        if (value > 0) return "positive";
        if (value < 0) return "negative";
        return "zero";
    }

    /** Access requires an active account AND admin/member authorization. */
    canAccess(isActive: boolean, isAdmin: boolean, isMember: boolean): boolean {
        return isActive && (isAdmin || isMember);
    }

    /** Map rating scores using switch/case; unsupported values are invalid. */
    getRating(score: number): string {
        switch (score) {
            case 5: return "Excellent";
            case 4: return "Good";
            case 3: return "Average";
            case 1:
            case 2: return "Poor";
            default: return "Invalid";
        }
    }
}
