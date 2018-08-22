const GET_INCOME = "GET_INCOME";

export function getIncome(income) {
  const action = {
    type: GET_INCOME,
    income
  };
  return action;
}

// reducer
export default function income(state = {}, action) {
  switch (action.type) {
    case GET_INCOME:
      return Object.assign({}, state, {
        income: action.income
      });
    default:
      return state;
  }
}
