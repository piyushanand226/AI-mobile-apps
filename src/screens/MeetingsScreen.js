import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useMeetingState } from '../context/MeetingContext';
import MeetingItem from '../components/MeetingItem';
import NeonHeading from '../components/NeonHeading';

export default function MeetingsScreen() {
  const { meetings } = useMeetingState();
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding:16 }}>
      <NeonHeading>Meetings</NeonHeading>
      {meetings.map(m => <MeetingItem key={m.id} title={m.title} time={m.time} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#050510' }
});
