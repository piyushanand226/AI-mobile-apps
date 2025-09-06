import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import NeonHeading from '../components/NeonHeading';
import NeonInput from '../components/NeonInput';
import NeonButton from '../components/NeonButton';
import { useTaskState, useTaskDispatch } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';

export default function TasksScreen() {
  const { tasks } = useTaskState();
  const dispatch = useTaskDispatch();

  const [text, setText] = useState('');
  const [editing, setEditing] = useState(null);

  function addTask() {
    if (!text.trim()) return;
    const newTask = { id: String(Date.now()), title: text.trim(), done: false };
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setText('');
  }

  function startEdit(task) {
    setEditing(task);
    setText(task.title);
  }

  function saveEdit() {
    if (!editing) return;
    dispatch({ type: 'EDIT_TASK', payload: { id: editing.id, title: text.trim() } });
    setEditing(null);
    setText('');
  }

  function deleteTask(id) {
    Alert.alert('Delete', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => dispatch({ type: 'DELETE_TASK', payload: id }) }
    ]);
  }

  function toggleTask(id) {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding:16 }}>
      <NeonHeading>Tasks</NeonHeading>

      <NeonInput value={text} onChangeText={setText} placeholder="New task" />
      {editing ? (
        <NeonButton title="Save Task" onPress={saveEdit} />
      ) : (
        <NeonButton title="Add Task" onPress={addTask} />
      )}

      <View style={{ marginTop: 12 }}>
        {tasks.map(t => (
          <TaskItem key={t.id} task={t} onToggle={toggleTask} onEdit={startEdit} onDelete={deleteTask} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#050510' }
});
