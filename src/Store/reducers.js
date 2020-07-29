import * as actionType from "./actions";
const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_USER:
      return {
        users: state.users.concat(action.user),
      };
    case actionType.REMOVE_USER:
      console.log("case actionType.REMOVE_USER  :")
      return {
        users: state.users.filter((e) => e.id !== action.id),
      };
      default:
      return state;
  }
};

export default reducer;
