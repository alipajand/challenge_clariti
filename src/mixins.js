export const convertTexts = (name) => {
  return name.replace(/__c/g, '').replace('_', ' ')
}
