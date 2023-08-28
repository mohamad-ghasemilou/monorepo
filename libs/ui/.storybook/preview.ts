import {CssBaseline, ThemeProvider} from '@mui/material';
import {withThemeFromJSXProvider} from '@storybook/addon-styling';
import {lightTheme, darkTheme} from '../src/themes';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  })
];
