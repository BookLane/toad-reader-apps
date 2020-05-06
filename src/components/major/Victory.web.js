import { VictoryTheme as OrigVictoryTheme } from 'victory'

import { customizeTheme } from '../../utils/toolbox'

export * from 'victory'

export const VictoryTheme = customizeTheme({
  theme: OrigVictoryTheme,
  fontFamily: "system-ui",
})