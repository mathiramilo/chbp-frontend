export const shuffle = array => {
  const arrayCopy = [...array]
  return arrayCopy.sort(() => Math.random() - 0.5)
}
