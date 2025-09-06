import React, { createContext, useContext, useReducer } from 'react';

const MeetingStateContext = createContext();
const MeetingDispatchContext = createContext();

const initialState = {
  meetings: [
    { id: '1', title: 'Team Sync', time: '10:00 AM' },
    { id: '2', title: 'Circm Review', time: '3:30 PM' }
  ],
  tasks: [
    { id: 't1', title: 'Update project README' },
    { id: 't2', title: 'Fix login bug' }
  ]
};

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_MEETING': {
      return { ...state, meetings: [action.payload, ...state.meetings] };
    }
    case 'ADD_TASK': {
      return { ...state, tasks: [action.payload, ...state.tasks] };
    }
    default:
      return state;
  }
}

export function MeetingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MeetingStateContext.Provider value={state}>
      <MeetingDispatchContext.Provider value={dispatch}>
        {children}
      </MeetingDispatchContext.Provider>
    </MeetingStateContext.Provider>
  );
}

export function useMeetingState() {
  const context = useContext(MeetingStateContext);
  if (context === undefined) throw new Error('useMeetingState must be used within MeetingProvider');
  return context;
}

export function useMeetingDispatch() {
  const context = useContext(MeetingDispatchContext);
  if (context === undefined) throw new Error('useMeetingDispatch must be used within MeetingProvider');
  return context;
}
