export const Shortname = (name: string | undefined): string => {
  if (!name) {
    return ""
  }

  const shortname = name
    .split(" ")
    .filter((_, index) => index < 2)
    .map((value) => value[0])
    .join("")

  return shortname
}
