import {View} from '@gluestack-ui/themed';
import React from 'react';
import StatusBarAdmin from '../../../components/molecules/StatusBarAdmin';

const AddNewArticle = () => {
  return (
    <View>
      <StatusBarAdmin text="New Article" gap="$5" />
    </View>
  );
};

export default AddNewArticle;
