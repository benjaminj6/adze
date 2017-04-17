export default ({ tags, newContent }, tag) => {
  const stagedTags = newContent.tags || []
  console.log()
  console.log(tags.find(t => t.name === tag.name))
  return {
    newContentSaved: false,
    newContent: {
      ...newContent,
      tags: stagedTags.concat([
        tags.find(t => t.name === tag.name) || tag
      ])
    }
  }
}
