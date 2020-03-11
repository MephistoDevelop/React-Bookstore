const categories = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case 'All':
      return newState;
    default:
      return newState;
  }
};

export default categories;
