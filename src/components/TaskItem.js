import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} layout={Layout.springify()} style={[styles.row, task.done && styles.done]}>
      <TouchableOpacity onPress={() => onToggle(task.id)} style={{ flex: 1 }}>
        <Text style={[styles.title, task.done && styles.titleDone]}>{task.title}</Text>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(task)} style={styles.actionBtn}><Text style={styles.actionText}>Edit</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.actionBtn}><Text style={styles.actionText}>Del</Text></TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#081026',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1b2b44',
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  done: {
    opacity: 0.7
  },
  title: {
    color: '#EAF4FF',
    fontSize: 16
  },
  titleDone: {
    textDecorationLine: 'line-through',
    color: '#7b8aa5'
  },
  actions: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  actionBtn: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2E6FFF',
  },
  actionText: {
    color: '#3AB4FF',
    fontWeight: '600'
  }
});
