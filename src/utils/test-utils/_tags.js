export function createTags (amt) {
  const tags = []

  for (let i = 0; i < amt; i++) {
    tags.push({
      name: `test-${i}`,
      color: `#${i < 10 ? i : 0}00`
    })
  }

  return tags.length === 1 ? tags[0] : tags
}
