import React, {ComponentProps} from 'react';
import {Text} from '@gluestack-ui/themed';

type TextSemiboldProps = ComponentProps<typeof Text> & {
  text: React.ReactNode;
};

const TextBold = ({text, ...props}: TextSemiboldProps) => {
  return (
    <Text fontFamily="Poppins-Bold" color="black" {...props}>
      {text}
    </Text>
  );
};

export default TextBold;
