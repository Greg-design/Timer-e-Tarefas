// aqui somente vai arquivos de definição de tipos do typescript, por isso o .d.ts, só tem tipagem.

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
