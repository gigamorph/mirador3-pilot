export const settings = (state = null, action) => {
  switch (action.type) {
    case 'SET_SETTINGS':
      return action.settings;
    default:
      return state;
  }
};

export default settings;
