import { Post } from '~/server/models'

export function createPosts (number) {
  const posts = []

  for (let i = 0; i < number; i++) {
    const content = `test-${i}`
    posts.push({
      title: content,
      html: `<p>${content}</p>`,
      md: content,
      id: i,
      date: new Date(0 + (i * 1000 * 60 * 60 * 24)) // each entry 1 day apart
    })
  }

  if (posts.length === 1) {
    return posts[0]
  } else {
    return posts
  }
}

export async function populateDB (number) {
  const posts = createPosts(number)
  const inDB = await Post.create(posts)
  return inDB
}

export async function clearDB () {
  await Post.remove({})
}
