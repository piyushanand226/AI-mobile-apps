import React, { createContext, useContext, useReducer } from 'react';

const TaskStateContext = createContext();
const TaskDispatchContext = createContext();

const initialState = {
  tasks: [
    { id: 't1', title: 'Update project README', done: false },
    { id: 't2', title: 'Fix login bug', done: false }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(t => t.id === action.payload.id ? { ...t, title: action.payload.title } : t)
      };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload) };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(t => t.id === action.payload ? { ...t, done: !t.done } : t)
      };
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TaskStateContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
}

export function useTaskState() {
  const ctx = useContext(TaskStateContext);
  if (ctx === undefined) throw new Error('useTaskState must be used within TaskProvider');
  return ctx;
}

export function useTaskDispatch() {
  const ctx = useContext(TaskDispatchContext);
  if (ctx === undefined) throw new Error('useTaskDispatch must be used within TaskProvider');
  return ctx;
}
