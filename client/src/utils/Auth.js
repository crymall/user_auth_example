const Auth = {
  authenticateUser: token => {
    sessionStorage.setItem("token", token);
  },
  isUserAuthenticated: () => {
    return sessionStorage.getItem("token") !== null;
  },
  deauthenticateUser: () => {
    sessionStorage.removeItem("token");
  },
  getToken: () => {
    return sessionStorage.getItem("token");
  }
};

export default Auth;
