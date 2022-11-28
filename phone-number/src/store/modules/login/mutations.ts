import { LoginState } from "@/types";

const SUCCESS_GET_ACCESSTOKEN = (state: LoginState, accessToken: string) => {
  state.accessToken = accessToken;
};

export { SUCCESS_GET_ACCESSTOKEN };
