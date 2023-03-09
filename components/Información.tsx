import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  title: string,
  content: string
}

const CustomerCardInfo = ({ title, content }: Props) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={{ fontWeight: '500' }}>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

export default CustomerCardInfo;
