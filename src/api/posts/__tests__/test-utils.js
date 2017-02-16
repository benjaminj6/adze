export function createPosts (number, title, html) {
  const posts = []

  for (let i = 0; i < number; i++) {
    const content = `test-${i}`
    posts.push({
      title: content,
      html: content,
      date: new Date(0 + (i * 1000 * 60 * 60 * 24)) // each entry 1 day apart
    })
  }

  return posts
}
