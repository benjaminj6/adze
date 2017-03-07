export const addTag = (model, tag) => {
  const tags = model.newContent.tags || []

  return {
    newContent: {
      ...model.newContent,
      tags: tags.slice().concat([tag])
    }
  }
}

export const removeTag = ({ newContent }, tagId) => {
  if (newContent.tags) {
    return {
      newContent: {
        ...newContent,
        tags: newContent.tags.slice().filter(t => t.id !== tagId)
      }
    }
  }
}

export const updatePost = ({ newContent }, post) => ({
  newContent: {
    ...newContent,
    post
  }
})

// new title
export const updateTitle = ({ newContent }, title) => ({
  newContent: {
    ...newContent,
    title
  }
})
// select a post to edit
// wipe newContent
