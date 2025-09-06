import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function NeonInput({ value, onChangeText, placeholder, style }) {
  return (
    <View style={[styles.wrap, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#7b8aa5"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#071022',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2E6FFF',
    marginVertical: 8
  },
  input: {
    color: '#EAF4FF',
    fontSize: 16,
    padding: 8
  }
});
