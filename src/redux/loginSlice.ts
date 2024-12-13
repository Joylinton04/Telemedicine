import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { patients, doctors, user, Doctors } from "@/data/Logins";

interface AuthState {
  isAuthenticated: boolean;
  hasAccount: boolean;
  currentUser: (Doctors | user) | null;
  users: (Doctors | user)[];
}

const initialState: AuthState = {
  isAuthenticated: false,
  hasAccount: false,
  currentUser: null,
  users: [...patients, ...doctors],
}


export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string; password: string }>) {
      const { username, password } = action.payload;
      const foundUser = state.users.find(user => user.username === username && user.password === password);
      if (foundUser) {
        state.isAuthenticated = true;
        state.currentUser = foundUser;
        state.hasAccount = true;
      } else {
        state.hasAccount = false;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
    signup(state, action: PayloadAction<(user | Doctors)>) {
      const foundUser = state.users.find(user => user.username === action.payload.username || user.email === action.payload.email);
      if (!foundUser) {
          state.hasAccount = true;
      } else {
          state.hasAccount = false;
      }
  },
    removeUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser(state, action: PayloadAction<user>) {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { login, removeUser, updateUser, logout, signup } = usersSlice.actions;
export default usersSlice.reducer;

