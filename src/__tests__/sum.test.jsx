import { expect, test } from "vitest"
import { sum } from "../components/sum"

test("to check sum function", () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
})