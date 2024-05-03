import React, {ComponentProps} from 'react';
import {Text} from '@gluestack-ui/themed';

type TextSemiboldProps = ComponentProps<typeof Text> & {
  text: React.ReactNode;
};

const TextSemibold = ({text, ...props}: TextSemiboldProps) => {
  return (
    <Text fontFamily="Poppins-SemiBold" {...props}>
      {text}
    </Text>
  );
};

export default TextSemibold;
