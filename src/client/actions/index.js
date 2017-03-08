// related to newContent / staging
export const addStagedTag = (model, tag) => {
  const tags = model.newContent.tags || []

  return {
    saved: false,
    newContent: {
      ...model.newContent,
      tags: tags.slice().concat([tag])
    }
  }
}

export const removeStagedTag = ({ newContent }, tagId) => {
  if (newContent.tags) {
    return {
      saved: false,
      newContent: {
        ...newContent,
        tags: newContent.tags.slice().filter(t => t.id !== tagId)
      }
    }
  }
}

export const updateStagedPost = ({ newContent }, post) => ({
  saved: false,
  newContent: {
    ...newContent,
    post
  }
})

export const updateStagedTitle = ({ newContent }, title) => ({
  saved: false,
  newContent: {
    ...newContent,
    title
  }
})

export const selectPost = ({ newContent, posts }, postId) => {
  const post = posts.find(p => p.id === postId)
  if (post) {
    return {
      saved: true,
      newContent: post
    }
  }
}

export const clearNewContent = ({ newContent }) => ({
  saved: false,
  newContent: {
    title: '',
    md: '',
    tags: [],
    date: new Date()
  }
})

// related to model.posts
export const addPost = ({ posts }, post) => ({
  posts: posts.push(post)
})
