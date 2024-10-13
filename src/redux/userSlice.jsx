import { createSlice } from '@reduxjs/toolkit';
import { saveStateToCookies } from '../cookiesFile';

const initialState = {
  users: [],
  removedUsers: [],
  editingUser: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const id = new Date().getTime().toString();
      state.users.push({ ...action.payload, id, status: true });
      saveStateToCookies(state);
    },
    editUser: (state, action) => {
      state.editingUser = action.payload;
      saveStateToCookies(state);
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        state.users = state.users.filter((user) => user.id !== userId);
        state.removedUsers.push({ ...user, status: false });
      }
      saveStateToCookies(state);
    },
    restoreUser: (state, action) => {
      const userId = action.payload;
      const user = state.removedUsers.find((user) => user.id === userId);
      if (user) {
        state.removedUsers = state.removedUsers.filter(
          (user) => user.id !== userId
        );
        state.users.push({ ...user, status: true });
      }
      saveStateToCookies(state);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      state.users = state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      state.editingUser = null;
      saveStateToCookies(state);
    },
  },
});

export const { addUser, editUser, deleteUser, restoreUser, updateUser } = userSlice.actions;

export default userSlice.reducer;