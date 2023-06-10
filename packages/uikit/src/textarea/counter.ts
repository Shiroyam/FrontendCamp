type Value = string | number | readonly string[] | undefined

export const countChars = (value: Value): number => {
  if (!value) {
    return 0
  }

  return value.toString().replace(/ /g, "").length
}
