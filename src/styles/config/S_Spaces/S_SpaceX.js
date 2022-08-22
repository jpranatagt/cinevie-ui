// horizontal spacing
import { T_SPACE_X } from './T_SPACE_X'
import { U_SpaceGenerator } from './U_SpaceGenerator'

const BASE_NUMBER = 4
const UNIT_TYPE = 'px'

export const S_SpaceX = U_SpaceGenerator({
  T_SPACES: T_SPACE_X,
  base: BASE_NUMBER,
  unit: UNIT_TYPE,
})
