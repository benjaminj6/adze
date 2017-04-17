export default {
  email: process.env.ADMIN_EMAIL || 'test@test.com',
  nav: [
    {
      title: 'New Post',
      href: 'create'
    },
    {
      title: 'Recent Posts',
      href: 'posts',
      children: 'posts'
    },
    {
      title: 'Categories',
      href: 'tags',
      children: 'tags'
    }
  ],
  posts: [],
  tags: [],
  newContentSaved: false,
  newContent: {
    title: '',
    md: '',
    tags: []
  },
  newTagDataSaved: false,
  newTagData: {
    name: '',
    color: ''
  }
}
