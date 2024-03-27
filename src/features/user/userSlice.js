import { createSlice } from '@reduxjs/toolkit';

const themes = {
  winter: 'winter',
  luxary: 'luxary',
  // black:'black',
  // dark:'dark'
  // dracula: 'dracula',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { luxary, winter } = themes;
      state.theme = state.theme === luxary ? winter : luxary;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
