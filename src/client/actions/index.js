// related to newContent / staging
const defaultNewContent = {
  title: '',
  md: '',
  tags: [],
  date: new Date()
}

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
    md: post
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

export const clearNewContent = () => ({
  saved: false,
  newContent: defaultNewContent
})

// related to model.posts
export const addPost = ({ posts }, post) => ({
  posts: posts.concat([post]),
  newContent: post,
  saved: true
})

export const addAllPosts = ({ posts }, newPosts) => ({
  posts: posts.concat(newPosts)
})

export const updatePost = ({ posts }, post) => ({
  saved: true,
  posts: posts.map(p => p._id === post._id ? post : p),
  newContent: post
})

export const deletePost = ({ posts }, postId) => ({
  posts: posts.filter(p => p.id !== postId),
  newContent: defaultNewContent
})
