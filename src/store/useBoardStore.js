import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useBoardStore = create((set) => ({
  columns: {
    toLearn: [],
    learning: [],
    learned: [],
  },
  addSkill: (column, title, tags = [], level) => {
    set((state) => ({
      columns: {
        ...state.columns,
        [column]: [
          ...state.columns[column],
          { id: uuidv4(), title, tags, level },
        ],
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
  deleteSkill: (column, id) => {
    set((state) => ({
      columns: {
        ...state.columns,
        [column]: state.columns[column].filter((s) => s.id !== id),
      },
    }));
  },
  editSkill: (column, id, updatedSkill) => {
    set((state) => ({
      columns: {
        ...state.columns,
        [column]: state.columns[column].map((skill) =>
          skill.id === id ? { ...skill, ...updatedSkill } : skill
        ),
      },
    }));
  },
}));

export default useBoardStore;
