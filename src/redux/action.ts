import { IUserAuth } from "../interface";
import { USER_AUTH } from "./actionTypes";

export const setUserAuth = (userAuth: IUserAuth) => {
  return {
    type: USER_AUTH,
    payload: userAuth,
  };
};