export class StringUtils {
    /** Reverse the given string. Example: "hello" -> "olleh". */
    reverse(value: string): string {
        // split creates characters, reverse changes their order, join rebuilds the string.
        return value.split("").reverse().join("");
    }

    /** Capitalize the first character; return empty input unchanged. */
    capitalize(value: string): string {
        if (value.length === 0) return value;
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    /** Return true when the string reads the same forwards and backwards. */
    isPalindrome(value: string): boolean {
        const reversed = value.split("").reverse().join("");
        return value === reversed;
    }

    /** Count words while treating repeated whitespace as one separator. */
    countWords(value: string): number {
        const trimmed = value.trim();
        if (trimmed === "") return 0;
        return trimmed.split(/\s+/).length;
    }

    /** Count occurrences of a character. Comparison is case-sensitive. */
    countCharacter(value: string, character: string): number {
        let count = 0;
        for (const current of value) {
            if (current === character) count++;
        }
        return count;
    }
}
