import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function ManagerScreen() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAIResponse] = useState('');

  const mockManagerReply = (input) => {
    if (input.toLowerCase().includes('sprint')) {
      return 'For sprint planning, consider reviewing backlog items, assigning priorities, and estimating effort.';
    } else if (input.toLowerCase().includes('meeting')) {
      return 'Make sure to set a clear agenda and send reminders 15 minutes before the meeting.';
    } else if (input.toLowerCase().includes('task')) {
      return 'Assign tasks based on team availability and skill alignment. Track progress daily.';
    } else {
      return 'I’m here to help with planning, coordination, and team guidance. Ask me anything!';
    }
  };

  const handleAskManager = () => {
    const reply = mockManagerReply(userInput);
    setAIResponse(reply);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🧠 Manager AI</Text>
      <Text style={styles.subtitle}>Need help with planning or team coordination?</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. How should I structure the sprint?"
        placeholderTextColor="#888"
        value={userInput}
        onChangeText={setUserInput}
      />

      <Button title="Ask Manager AI" onPress={handleAskManager} color="#3AB4FF" />

      {aiResponse !== '' && (
        <View style={styles.responseBox}>
          <Text style={styles.responseLabel}>Manager Response:</Text>
          <Text style={styles.responseText}>{aiResponse}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050510', padding: 20 },
  title: { fontSize: 22, color: '#3AB4FF', fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#ccc', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#3AB4FF',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    marginBottom: 10,
  },
  responseBox: {
    marginTop: 20,
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 8,
  },
  responseLabel: { color: '#3AB4FF', fontWeight: 'bold', marginBottom: 5 },
  responseText: { color: '#fff', fontSize: 16 },
});
