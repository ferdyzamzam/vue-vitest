import {assert, describe, it, expect } from "vitest";

function sayHello(name: string) {
    return `Hello ${name}`;
}

describe("sayHello", () => {
    it('should return with name', () => {
        expect(sayHello("Ferdhy")).to.equal("Hello Ferdhy");
        assert.equal(sayHello("Ferdhy"), "Hello Ferdhy");
    });
})