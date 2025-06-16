import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useBoardStore = create((set) => ({
  columns: {
    toLearn: [],
    learning: [],
    learned: [],
  },
  addSkill: (column, title, tags = []) => {
    set((state) => ({
      columns: {
        ...state.columns,
        [column]: [...state.columns[column], { id: uuidv4(), title, tags }],
      },
    }));
  },

  moveSkill: (from, to, skillId) => {
    set((state) => {
      const skill = state.columns[from].find((s) => s.id === skillId);
      if (!skill) return state;

      return {
        columns: {
          ...state.columns,
          [from]: state.columns[from].filter((s) => s.id !== skillId),
          [to]: [...state.columns[to], skill],
        },
      };
    });
  },
}));

export default useBoardStore;
