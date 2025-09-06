import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MeetingItem({ title, time }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#081026',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1b2b44',
    marginVertical: 6
  },
  title: { color: '#EAF4FF', fontSize: 16, fontWeight: '600' },
  time: { color: '#9BB3D6', fontSize: 14 }
});
