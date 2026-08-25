export class ArrayUtils {
    /** Sum all numbers; an empty array naturally returns 0. */
    sum(numbers: number[]): number {
        let total = 0;
        for (const number of numbers) total += number;
        return total;
    }

    /** Return a new array containing only even numbers. */
    getEvenNumbers(numbers: number[]): number[] {
        const result: number[] = [];
        for (const number of numbers) {
            if (number % 2 === 0) result.push(number);
        }
        return result;
    }

    /** Find the largest value; undefined is returned for an empty array. */
    findMax(numbers: number[]): number | undefined {
        if (numbers.length === 0) return undefined;
        let max = numbers[0];
        for (const number of numbers) {
            if (number > max) max = number;
        }
        return max;
    }

    /** Return values strictly greater than the supplied threshold. */
    filterGreaterThan(numbers: number[], threshold: number): number[] {
        const result: number[] = [];
        for (const number of numbers) {
            if (number > threshold) result.push(number);
        }
        return result;
    }

    /** Reverse without mutating the caller's original array. */
    reverse(numbers: number[]): number[] {
        return [...numbers].reverse();
    }
}
