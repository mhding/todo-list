import create from 'zustand';
import { State } from './types/todo';

const useStore = create<State>((set, get) => ({
  todos:[],
  setTodosIndex: async (data) => { set({ todos:data }) },
}));

export default useStore;