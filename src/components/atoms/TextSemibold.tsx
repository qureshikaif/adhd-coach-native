import React, {ComponentProps} from 'react';
import {Text} from '@gluestack-ui/themed';

type TextSemiboldProps = ComponentProps<typeof Text> & {
  text: React.ReactNode;
};

const TextSemibold = ({text, ...props}: TextSemiboldProps) => {
  return (
    <Text color="white" fontWeight="$semibold" fontFamily="$body" {...props}>
      {text}
    </Text>
  );
};

export default TextSemibold;
