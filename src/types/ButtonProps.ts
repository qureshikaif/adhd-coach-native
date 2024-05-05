import {StyledComponentProps} from '@gluestack-style/react/lib/typescript/types';
import {Pressable} from '@gluestack-ui/themed';
import {ComponentProps} from 'react';
import {ImageProps, ImageStyle, StyleProp} from 'react-native';
export type ButtonProps = {
  buttonProps?: ComponentProps<typeof Pressable>;
  imageProps?: StyledComponentProps<
    StyleProp<ImageStyle>,
    unknown,
    ImageProps,
    'Image'
  >;
  onPress?: () => void;
};
