const GET_EQUITY_USE = "GET_EQUITY_USE";

export function getEquityUse(equityUse) {
  const action = {
    type: GET_EQUITY_USE,
    equityUse
  };
  return action;
}

// reducer
export default function equityUse(state = {}, action) {
  switch (action.type) {
    case GET_EQUITY_USE:
      return Object.assign({}, state, { equityUse: action.equityUse });
    default:
      return state;
  }
}
