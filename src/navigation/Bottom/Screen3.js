import {View, Text} from 'react-native';
import React from 'react';

const Screen3 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text
        style={{fontSize: 30}}
       >
       Screen 3
      </Text>
    </View>
  );
};

export default Screen3;