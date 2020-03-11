const filter = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case 'CHANGE_FILTER':
      console.log(`Funkooo${state}${action.category}`);
      return [action.category];
    default:
      return newState;
  }
};


export default filter;
