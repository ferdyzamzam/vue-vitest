import { describe, it, expect } from "vitest";
import {sayHello} from "../src/say-hello";

describe("Say Hello", () => {
    it('shoul say hello', () =>{
        const result = sayHello('Ferdhy');
        expect(result).toBe('Hello Ferdhy');
    })
})