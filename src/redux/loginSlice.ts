import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data, user } from "@/data/Logins";

interface AuthState {
  isAuthenticated: boolean;
  hasAccount: boolean;
  currentUser: user | null;
  users: user[];
}

const initialState: AuthState = {
  isAuthenticated: false,
  hasAccount: false,
  currentUser: null,
  users: data
}


export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ name: string; password: string }>) {
      const { name, password } = action.payload;
      const foundUser = state.users.find(user => user.name === name && user.password === password);
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
    removeUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    // Update a user's details
    updateUser(state, action: PayloadAction<user>) {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { login, removeUser, updateUser, logout } = usersSlice.actions;
export default usersSlice.reducer;

