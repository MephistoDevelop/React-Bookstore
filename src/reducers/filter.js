const filter = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case 'CHANGE_FILTER':
      return [action.category];
    default:
      return newState;
  }
};


export default filter;
