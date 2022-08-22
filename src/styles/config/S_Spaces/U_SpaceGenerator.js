export const U_SpaceGenerator = (params) => {
  const BASE_NUMBER = 4
  const UNIT_TYPE = 'px'

  const {
    T_SPACES = [],
    base = BASE_NUMBER,
    unit = UNIT_TYPE,
  } = params

  const spaces = {}

  T_SPACES.forEach(({ category, scale }) => {
    const finalSpace = `${scale * base}${unit}`
    spaces[category] = finalSpace
  })

  return spaces
}
