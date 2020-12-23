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

      case `ADD_USER_DATA`:
        return {
          ...state,
          user_data: action.payload,
        };

      case `ADD_ANSWEAR2`:
        return {
          ...state,
          answears2: state.answears2.concat(action.payload),
        };

      case `ADD_BALLOON`:
        return {
          ...state,
          balloon: state.balloon.concat(action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default Reducer;