export const validCategory = category => {
  const categories = ['nike', 'adidas', 'puma']
  return categories.includes(category) || category === undefined
}
