import { create } from "zustand";

const useUIStore = create((set) => ({
  isSidebarOpen: true,

  toggleSidebar: () => {
    return set((state) => ({ isSidebarOpen: !state.isSidebarOpen }));
  },
}));

export default useUIStore;
