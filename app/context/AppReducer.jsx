export default (state, action) => {
  switch (action.type) {
    case "remove":
      return {
        ...state,
        dharbadan: state.dharbadan.filter((dhar) => dhar.id !== action.payload),
      };
    case "add":
      return {
        ...state,
        dharbadan: [action.payload, ...state.dharbadan],
      };
      /* case 'isadded': 
      return {
        ...state,
        dharbadan: state.dharbadan.some(dhar => dhar.id === action.payload)
      }; */
    default:
      return state;
  }
};
