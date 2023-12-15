import { describe, it, expect, vi } from "vitest";

describe("Mocking", () => {
    
    function sayHello(name: string, callback: (message: string) => void){
        callback(`Hello ${name}`);
    }

    it('should support mock', () => {
        const callback = vi.fn();
        sayHello('Ferdhy', callback);

        expect(callback).toHaveBeenCalledWith('Hello Ferdhy');
    })
})