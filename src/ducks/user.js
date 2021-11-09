export const name = "user";

export const userState = {
  isLoading: false,
  userInfo: {
    username: undefined,
    password: undefined,
  },
  userAccounts: [],
};

export function reducer(state = userState, action) {
  switch (action.type) {
    case "REQUEST_USER_INFO":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_USER_INFO_SUCCESS":
      return {
        ...state,
        isLoading: true,
        userInfo: action.payload,
      };
    case "ADD_USER_TO_LIST":
      return {
        ...state,
        isLoading: true,
        userAccounts: [...state.userAccounts, action.payload],
      };
    default:
      return state;
  }
}

// selector
export function getUserAccount(state, username) {
  return state.userAccounts.find(
    (userAccount) => userAccount.username === username,
  );
}

export function checkIfUsernameExists(state, username) {
  return state.userAccounts
    .map((userInfo) => userInfo.username)
    .includes(username);
}

export function userAccountList(state) {
  return state.user.userAccounts;
}

// actions

export function fetchUserInfoAction(userInfo) {
  return {
    type: "FETCH_USER_INFO_SUCCESS",
    payload: userInfo,
  };
}

export function registerUserAction(userAccount) {
  return {
    type: "ADD_USER_TO_LIST",
    payload: userAccount,
  };
}
