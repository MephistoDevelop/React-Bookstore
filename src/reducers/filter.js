const filter = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case 'ALL':
      return [...newState];
    default:
      return newState;
  }
};


export default filter;
