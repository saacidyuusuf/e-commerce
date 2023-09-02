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
          dharbadan: [...state.dharbadan, action.payload],
        };
        case "isadded":
      return {
        ...state,
        dharbadan: state.dharbadan.map((dhar) =>
          dhar.id === action.payload ? { ...dhar, added: true } : dhar
        ),
      };
   /*  case "add":
      return {
        ...state,
        dharbadan: [action.payload, ...state.dharbadan],
      }; */
    default:
      return state;
  }
};
