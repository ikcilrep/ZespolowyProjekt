const Reducer = (state, action) => {
  switch (action.type) {
    case `SET_LANGUAGE`:
      return {
        ...state,
        language: action.payload,
      };

    case `ADD_ANSWEAR`:
      return {
        ...state,
        answears: state.answears.concat(action.payload),
      };

    default:
      return state;
  }
};

export default Reducer;
