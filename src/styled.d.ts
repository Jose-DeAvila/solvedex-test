import 'styled-components';

interface IMainPalette {
  primary: string;
  textColor: string;
  secondColor: string;
  thirdColor: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: IMainPalette;
  }
}