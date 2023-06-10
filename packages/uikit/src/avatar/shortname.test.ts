import { describe, test, expect } from "vitest"
import { getShortname } from "./shortname"

describe("shortname", () => {
  test("shortname function", () => {
    expect(getShortname("Semyon Zasov")).toBe("SZ")
    expect(getShortname("Semyon")).toBe("S")
    expect(getShortname("")).toBe("")
    expect(getShortname(undefined)).toBe("")
    expect(getShortname("Semyon Zasov Test")).toBe("SZ")
  })
})
