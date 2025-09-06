import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function NeonHeading({ children, style }) {
  return <Text style={[styles.heading, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#3AB4FF',
    textAlign: 'center',
    textShadowColor: '#00FFFF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
    marginVertical: 12
  }
});
