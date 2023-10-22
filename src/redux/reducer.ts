import { IUserAuth } from "../interface";
import { USER_AUTH } from "./actionTypes";

export interface IReducer {
  userAuth: IUserAuth;
}

interface IAction {
  type: string;
  payload: any;
}

export const userAuthState = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  token: "",
  isAuthenticated: false,
};

const intialState: IReducer = {
  userAuth: userAuthState,
};

export const reducer = (state = intialState, action: IAction) => {
  switch (action.type) {
    case USER_AUTH:
      state = {
        ...state,
        userAuth: action.payload,
      };
      break;
  }
  return state;
};