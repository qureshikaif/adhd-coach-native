import React, {ComponentProps} from 'react';
import {Text} from '@gluestack-ui/themed';

type TextSemiboldProps = ComponentProps<typeof Text> & {
  text: React.ReactNode;
};

const TextMedium = ({text, ...props}: TextSemiboldProps) => {
  return (
    <Text fontFamily="Poppins-Medium" color="black" {...props}>
      {text}
    </Text>
  );
};

export default TextMedium;
