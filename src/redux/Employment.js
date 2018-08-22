const GET_EMPLOYMENTSTATUS = "GET_EMPLOYMENTSTATUS";

export function getEmploymentStatus(employmentStatus) {
  const action = {
    type: GET_EMPLOYMENTSTATUS,
    employmentStatus
  };
  return action;
}

// reducer
export default function employmentStatus(state = {}, action) {
  switch (action.type) {
    case GET_EMPLOYMENTSTATUS:
      return Object.assign({}, state, {
        empoymentStatus: action.employmentStatus
      });
    default:
      return state;
  }
}
