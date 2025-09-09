import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import MeetingsScreen from '../screens/MeetingsScreen';
import TasksScreen from '../screens/TasksScreen';
import ManagerScreen from '../screens/ManagerScreen';
import TeamMemberScreen from '../screens/TeamMemberScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#050510' },
          headerTintColor: '#3AB4FF',
          tabBarStyle: { backgroundColor: '#050510' },
          tabBarActiveTintColor: '#3AB4FF',
          tabBarInactiveTintColor: '#888',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Meetings':
                iconName = 'calendar-outline';
                break;
              case 'Tasks':
                iconName = 'checkmark-done-outline';
                break;
              case 'ManagerAI':
                iconName = 'person-outline';
                break;
              case 'TeamMemberAI':
                iconName = 'people-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'OrianMgr AI' }} />
        <Tab.Screen name="Meetings" component={MeetingsScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="ManagerAI" component={ManagerScreen} options={{ title: '🧠 Manager AI' }} />
        <Tab.Screen name="TeamMemberAI" component={TeamMemberScreen} options={{ title: '👨‍💻 Team Member AI' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
