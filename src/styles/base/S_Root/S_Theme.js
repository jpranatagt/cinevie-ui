import { css } from 'styled-components'

export const S_Theme = css`
  --primary-background: ${(p) => p.theme.background};
  --primary-text: ${(p) => p.theme.text};
  --primary-0: ${(p) => p.theme.primary_0};
  --primary-5: ${(p) => p.theme.primary_5};
  --primary-10: ${(p) => p.theme.primary_10};
  --primary-20: ${(p) => p.theme.primary_20};
  --primary-30: ${(p) => p.theme.primary_30};
  --primary-40: ${(p) => p.theme.primary_40};
  --primary-50: ${(p) => p.theme.primary_50};
  --primary-60: ${(p) => p.theme.primary_60};
  --primary-70: ${(p) => p.theme.primary_70};
  --primary-80: ${(p) => p.theme.primary_80};
  --primary-90: ${(p) => p.theme.primary_90};
  --primary-95: ${(p) => p.theme.primary_95};
  --primary-100: ${(p) => p.theme.primary_100};

  --home-bg-linear: ${(p) => p.theme.home_bg_linear};
`
