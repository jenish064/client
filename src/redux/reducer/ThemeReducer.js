// Define initial state with light theme
const initialState = {
  theme: 'light' // Light theme by default
};

// Define reducer function to handle theme state
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: action.payload === 'dark' ? 'light' : 'dark'
      };
    default:
      return state;
  }
};

export default themeReducer;
