const GET_ADDRESS = "GET_ADDRESS";

export function getAddress(address) {
  const action = {
    type: GET_ADDRESS,
    address
  };
  return action;
}

// reducer
export default function address(state = {}, action) {
  switch (action.type) {
    case GET_ADDRESS:
      return Object.assign({}, state, {
        address: action.address
      });
    default:
      return state;
  }
}
