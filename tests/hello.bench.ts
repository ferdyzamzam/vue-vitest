import {bench, describe, it, expect } from "vitest";

describe("BenchMaking", () => {
    function sayHello(name: string) {
        return `Hello ${name}`;
    }

    bench("should run a benchmark", () => {
        const result = sayHello("World");
        expect(result).toBe("Hello World");
    })
})