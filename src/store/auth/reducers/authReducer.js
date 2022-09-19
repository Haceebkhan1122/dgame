const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const authReducer = (state = initialState, action) => {
  if (action.type === "auth/SIGNUP") {
    localStorage.setItem("user", JSON.stringify(action.payload));
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === "auth/SIGNIN") {
    return { ...state, user: action.payload };
  }
  if (action.type === "auth/LOGOUT") {
    return { user: action.payload };
  }
  return state;
};
