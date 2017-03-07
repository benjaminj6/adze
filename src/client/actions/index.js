export const addTag = (model, tag) => {
  const tags = model.newContent.tags || []

  return {
    newContent: {
      ...model.newContent,
      tags: tags.slice().concat([tag])
    }
  }
}
