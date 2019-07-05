const initialState = {
  restaurantDetails: []
};

export default function reducer(state = initialState, action) {
  let state2 = state;
  console.log("passing redux info");
  switch (action.type) {
    case "SET_DETAILS":
      return { ...state2, restaurantDetails: action.paylod };
    default:
      break;
  }
  return state2;
}
