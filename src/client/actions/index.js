// related to newContent / staging
const defaultNewContent = {
  title: '',
  md: '',
  tags: [],
  date: new Date()
}

export const addStagedTag = ({ tags, newContent }, tag) => {
  const stagedTags = newContent.tags || []
  console.log()
  console.log(tags.find(t => t.name === tag.name))
  return {
    saved: false,
    newContent: {
      ...newContent,
      tags: stagedTags.concat([
        tags.find(t => t.name === tag.name) || tag
      ])
    }
  }
}

export const removeStagedTag = ({ newContent }, tagId) => {
  if (newContent.tags) {
    return {
      saved: false,
      newContent: {
        ...newContent,
        tags: newContent.tags.slice().filter(t => t._id !== tagId)
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
  const post = posts.find(p => p._id === postId)
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
  posts: [post].concat(posts),
  newContent: post,
  saved: true
})

export const addAllPosts = ({ posts }, newPosts) => ({
  posts: newPosts
})

export const updatePost = ({ posts }, post) => ({
  saved: true,
  posts: posts.map(p => p._id === post._id ? post : p),
  newContent: post
})

export const deletePostFromModel = ({ posts }, postId) => ({
  posts: posts.filter(p => p._id !== postId),
  newContent: defaultNewContent
})

// related to model.tags
export const addTag = ({ tags }, tag) => ({
  tags: [tag].concat(tags)
})

export const addAllTags = ({ tags }, newTags) => ({
  tags: newTags
})

// related to writing to DB
export const saveNewPost = ({ posts }, newPost, actions) => {
  console.log('saving...')
  console.log(newPost)
  window.fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newPost.title,
      post: newPost.md,
      tags: newPost.tags
    }),
    headers: new window.Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => {
    if (res.status !== 201) {
      throw new Error('Unauthorized')
    }

    return res.json()
  })
  .then(json => {
    actions.addPost(json)
    actions.router.go(`/dashboard/posts/id=${json._id}`)
  })
  .catch(err => console.log(err))
}

export const saveUpdatedPost = ({ posts }, updatedPost, actions) => {
  console.log('saving...')
  console.log('preDB', updatedPost)
  window.fetch(`/api/posts/${updatedPost._id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: updatedPost.title,
      post: updatedPost.md,
      tags: updatedPost.tags
    }),
    headers: new window.Headers({ 'Content-Type': 'application/json' })
  })
  .then(res => {
    if (res.status !== 200) {
      throw new Error('Post failed to save')
    }

    return res.json()
  })
  .then(post => { console.log('updated') })
  .catch(err => console.log(err))
}

export const deletePost = ({ posts }, postId, actions) => {
  console.log('deleting...')
  console.log('postId', postId)
  window.fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  })
  .then(res => {
    if (res.status !== 200) {
      throw new Error('Post failed to delete')
    }

    actions.deletePostFromModel(postId)
    actions.router.go('/dashboard')
  })
  .catch(err => console.log(err))
}
