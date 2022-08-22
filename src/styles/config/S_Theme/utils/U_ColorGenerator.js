import { U_CategoryConvention } from './U_CategoryConvention'
import { U_HSLConvention } from './U_HSLConvention'

const DEFAULT_LIGHTNESS = [
  0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100,
]

export const U_ColorGenerator = (
  category = 'category',
  hueSaturation = '0, 0%',
  lightnesses = DEFAULT_LIGHTNESS
) => {
  const colors = {}

  lightnesses.forEach(
    (lightness) =>
      (colors[U_CategoryConvention(category, lightness)] =
        U_HSLConvention(hueSaturation, lightness))
  )

  return colors
}
