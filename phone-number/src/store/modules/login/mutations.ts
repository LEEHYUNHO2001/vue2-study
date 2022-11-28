import { LoginState } from "@/types";

const SUCCESS_GET_ACCESSTOKEN = (state: LoginState, accessToken: string) => {
  state.accessToken = accessToken;
};

const CLEAR_ACCESSTOKEN = (state: LoginState) => {
  state.accessToken = "";
};

export { SUCCESS_GET_ACCESSTOKEN, CLEAR_ACCESSTOKEN };
