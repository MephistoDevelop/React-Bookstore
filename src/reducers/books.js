const newID = () => parseInt(Math.random() * 100, 10);
const initialState = {
  books: [
    {
      id: newID(),
      title: 'The lord of the rings',
      category: 'Sci-Fi',
    },
    {
      id: newID(),
      title: 'Nightmare on Stret Elmer',
      category: 'Horror',
    },
    {
      id: newID(),
      title: 'Im Watching you',
      category: 'Suspense',
    },
  ],
};

const books = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'CREATE_BOOK':
      //     console.log('Created Book!!');
      break;
    case 'DELETE_BOOK':
      break;
    default:
      return newState;
  }
  return newState;
};
export default books;
