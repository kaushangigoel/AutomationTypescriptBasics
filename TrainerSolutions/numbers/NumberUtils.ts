export class NumberUtils {
    /** Add two numbers. */
    add(first: number, second: number): number { return first + second; }

    /** Subtract second from first. */
    subtract(first: number, second: number): number { return first - second; }

    /** Multiply two numbers. */
    multiply(first: number, second: number): number { return first * second; }

    /** Divide first by second; division by zero is rejected explicitly. */
    divide(first: number, second: number): number {
        if (second === 0) throw new Error("Cannot divide by zero");
        return first / second;
    }

    /** `%` returns the remainder; even numbers have remainder 0 when divided by 2. */
    isEven(value: number): boolean { return value % 2 === 0; }

    /** Return the larger of two numbers. */
    max(first: number, second: number): number { return first > second ? first : second; }

    /** Calculate average; empty input returns 0. */
    calculateAverage(numbers: number[]): number {
        if (numbers.length === 0) return 0;
        let total = 0;
        for (const number of numbers) total += number;
        return total / numbers.length;
    }
}
