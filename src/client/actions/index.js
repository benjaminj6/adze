export const addTag = (model, tag) => {
  const tags = model.newContent.tags || []

  return {
    saved: false,
    newContent: {
      ...model.newContent,
      tags: tags.slice().concat([tag])
    }
  }
}

export const removeTag = ({ newContent }, tagId) => {
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

export const updatePost = ({ newContent }, post) => ({
  saved: false,
  newContent: {
    ...newContent,
    post
  }
})

export const updateTitle = ({ newContent }, title) => ({
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
