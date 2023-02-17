export const validCategory = category => {
  const categories = ['nike', 'adidas', 'puma']
  return categories.includes(category) || category === undefined
}

export const validEmail = email => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
  return re.test(email)
}
