import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function NeonButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#0B1330',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3AB4FF',
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#3AB4FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10
  },
  text: {
    color: '#EAF4FF',
    fontWeight: '700'
  }
});
