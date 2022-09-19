export const Signup = (firstName, lastName, email, password) => {
  return {
    type: "auth/SIGNUP",
    payload: {
      id: new Date().getTime(),
      firstName,
      lastName,
      email,
      password,
    },
  };
};

export const Signin = (email, password) => {
  return {
    type: "auth/SIGNIN",
    payload: {
      id: new Date().getTime(),
      email,
      password,
    }
  };
};

export const Logout = (payload) => {
  localStorage.clear();
  return {
    type: "auth/LOGOUT",
    payload: payload,
  };
};
