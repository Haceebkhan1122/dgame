export const toggleSignUpModal = (payload) => {
  return {
    type: "ui/TOGGLE_SIGNUP_MODAL",
    payload: payload,
  };
};

export const toggleSignInModal = (payload) => {
  return {
    type: "ui/TOGGLE_SIGNIN_MODAL",
    payload: payload,
  };
};
