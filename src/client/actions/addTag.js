export default ({ tags }, tag) => ({
  tags: [tag].concat(tags)
})
