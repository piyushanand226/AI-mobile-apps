import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NeonHeading from '../components/NeonHeading';
import NeonInput from '../components/NeonInput';
import NeonButton from '../components/NeonButton';
import { useMeetingState, useMeetingDispatch } from '../context/MeetingContext';
import MeetingItem from '../components/MeetingItem';

export default function HomeScreen() {
  const { meetings, tasks } = useMeetingState();
  const dispatch = useMeetingDispatch();

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('5:00 PM');

  function addMeeting() {
    if (!title.trim()) return;
    const newMeet = { id: String(Date.now()), title: title.trim(), time: time.trim() };
    dispatch({ type: 'ADD_MEETING', payload: newMeet });
    setTitle('');
    setTime('5:00 PM');
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <NeonHeading>AI Meeting App</NeonHeading>

      <Text style={styles.sectionTitle}>Meetings</Text>
      {meetings.map(m => <MeetingItem key={m.id} title={m.title} time={m.time} />)}

      <Text style={styles.formLabel}>Meeting Title:</Text>
      <NeonInput value={title} onChangeText={setTitle} placeholder="Sprint Planning" />

      <Text style={styles.formLabel}>Time:</Text>
      <NeonInput value={time} onChangeText={setTime} placeholder="5:00 PM" />

      <NeonButton title="Schedule Meeting" onPress={addMeeting} />

      <Text style={[styles.sectionTitle, { marginTop: 18 }]}>Tasks</Text>
      {tasks.map(t => <MeetingItem key={t.id} title={t.title} time="" />)}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#050510' },
  sectionTitle: { color:'#3AB4FF', fontSize:18, fontWeight:'700', marginTop:12 },
  formLabel: { color:'#9BB3D6', marginTop:12, marginBottom:6 }
});
