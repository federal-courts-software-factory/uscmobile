// react-native-elements.d.ts

export * from '@rneui/themed';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module '@rneui/themed' {
  export interface TextProps {
    bold: boolean;
  }

  export interface Colors {
    background: string;
    border: string;
    text: string;
    altText: string;
    danger: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
    Text: Partial<TextProps>;
  }
}