import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const CustomTextInput = ({ value, onChangeText }) => {
  const handlePress = () => {
    // Implement any custom logic here when the custom input is pressed
    console.log('Custom input pressed');
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
  },
  inputText: {
    fontSize: 16,
  },
});

export default CustomTextInput;
