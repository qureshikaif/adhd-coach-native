import React, {ComponentProps} from 'react';
import {Text} from '@gluestack-ui/themed';

type TextSemiboldProps = ComponentProps<typeof Text> & {
  text: React.ReactNode;
};

const TextRegular = ({text, ...props}: TextSemiboldProps) => {
  return (
    <Text fontFamily="Poppins-Regular" color="black" {...props}>
      {text}
    </Text>
  );
};

export default TextRegular;
