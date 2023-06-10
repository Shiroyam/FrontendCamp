import { describe, test, expect } from "vitest"
import { countChars } from "./counter"

describe("count", () => {
  test("count function", () => {
    expect(countChars("test")).toBe(4)
    expect(countChars("test  ")).toBe(4)
    expect(countChars("test  test")).toBe(8)
    expect(countChars(1)).toBe(1)
    expect(countChars(undefined)).toBe(0)
  })
})
