// vertical spacing
import { T_SPACE_Y } from './T_SPACE_Y'
import { U_SpaceGenerator } from './U_SpaceGenerator'

const BASE_NUMBER = 4
const UNIT_TYPE = 'px'

export const S_SpaceY = U_SpaceGenerator({
  T_SPACES: T_SPACE_Y,
  base: BASE_NUMBER,
  unit: UNIT_TYPE,
})
