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
    newContentSaved: false,
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
      newContentSaved: false,
      newContent: {
        ...newContent,
        tags: newContent.tags.slice().filter(t => t._id !== tagId)
      }
    }
  }
}

export const updateStagedPost = ({ newContent }, post) => ({
  newContentSaved: false,
  newContent: {
    ...newContent,
    md: post
  }
})

export const updateStagedTitle = ({ newContent }, title) => ({
  newContentSaved: false,
  newContent: {
    ...newContent,
    title
  }
})

export const selectPost = ({ newContent, posts }, postId) => {
  const post = posts.find(p => p._id === postId)
  if (post) {
    return {
      newContentSaved: true,
      newContent: post
    }
  }
}

export const clearNewContent = () => ({
  newContentSaved: false,
  newContent: defaultNewContent
})

// related to model.posts
export const addPost = ({ posts }, post) => ({
  posts: [post].concat(posts),
  newContent: post,
  newContentSaved: true
})

export const addAllPosts = ({ posts }, newPosts) => ({
  posts: newPosts
})

export const updatePost = ({ posts }, post) => ({
  newContentSaved: true,
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
    }),
    credentials: 'include'
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
    headers: new window.Headers({ 'Content-Type': 'application/json' }),
    credentials: 'include'
  })
  .then(res => {
    if (res.status === 401) {
      actions.router.go('/')
    }

    if (res.status !== 200) {
      throw new Error('Post failed to save')
    }

    return res.json()
  })
  .then(json => {
    console.log(json)
    actions.updatePost(json)
  })
  .catch(err => {
    console.log(err)
  })
}

export const deletePost = ({ posts }, postId, actions) => {
  console.log('deleting...')
  console.log('postId', postId)
  window.fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    credentials: 'include'
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

export const logout = (model, data, actions) => {
  window.fetch('/api/auth/logout')
  .then(res => actions.router.go('/'))
}

export const stageTagName = ({ newTagData, tag }, name) => ({
  newTagDataSaved: false,
  newTagData: {
    ...newTagData,
    name
  }
})

export const stageTagColor = ({ newTagData }, color) => ({
  newTagDataSaved: false,
  newTagData: {
    ...newTagData,
    color
  }
})

export const clearStagedTag = ({ newTagData }) => ({
  newTagDataSaved: false,
  newTagData: {
    name: '',
    color: ''
  }
})

export const selectTag = ({ tags }, tagId) => ({
  newTagDataSaved: true,
  newTagData: tags.find(t => t._id === tagId)
})

export const updateSavedTag = ({ tags, newTagData }, tag) => ({
  tags: tags.map(t => t._id === tag._id ? tag : t),
  newTagData: tag,
  newTagDataSaved: true
})

export const saveTag = (model, newTagData, actions) => {
  window.fetch(`/api/tags/${newTagData._id}`, {
    method: 'PATCH',
    credentials: 'include',
    body: JSON.stringify({
      name: newTagData.name,
      color: newTagData.color
    }),
    headers: new window.Headers({ 'Content-Type': 'application/json' })
  }).then(res => {
    if (res.status !== 200) {
      throw new Error('Post failed to update')
    }

    return res.json()
  })
  .then(json => actions.updateSavedTag(json))
  .catch(err => console.log('ERR!', err))
}

export const removeTagFromModel = ({ tags }, tagId) => ({
  tags: tags.filter(t => t._id !== tagId)
})

export const deleteTag = (_, tagId, actions) => {
  window.fetch(`/api/tags/${tagId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  .then(res => {
    if (res.status !== 200) {
      throw new Error('Failed to delete')
    }

    return res.json()
  })
  .then(json => {
    actions.removeTagFromModel(json._id)
    actions.router.go('/dashboard')
  })
  .catch(err => console.log(err))
}
