import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("authToken") || null,

  login: (userData, token) => {
    localStorage.setItem("authToken", token);
    set({
      user: userData,
      token,
    });
  },

  logout: () => {
    localStorage.removeItem("authToken");
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
