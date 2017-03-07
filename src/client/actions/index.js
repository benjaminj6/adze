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

// new text content
// new title

// select a post to edit
// wipe newContent
