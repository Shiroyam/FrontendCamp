import { describe, test, expect } from "vitest"
import { Shortname } from "./shortname"

describe("Avatar component", () => {
  test("Shortname function", () => {
    expect(Shortname("Semyon Zasov")).toBe("SZ")
    expect(Shortname("Semyon")).toBe("S")
    expect(Shortname("")).toBe("")
    expect(Shortname(undefined)).toBe("")
    expect(Shortname("Semyon Zasov Test")).toBe("SZ")
  })
})
