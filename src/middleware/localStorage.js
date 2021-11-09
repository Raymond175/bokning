const localStorageMiddleware = ({ getState }) => (next) => (action) => {
  next(action);
  localStorage.setItem("state", JSON.stringify(getState()));
};

export default localStorageMiddleware;
