import { VictoryTheme as OrigVictoryTheme } from 'victory-native'

import { customizeTheme } from '../../utils/toolbox'

export * from 'victory-native'

export const VictoryTheme = customizeTheme({
  theme: OrigVictoryTheme,
  fontFamily: "'Helvetica', 'Trebuchet MS', sans-serif",
})