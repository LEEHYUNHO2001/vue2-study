import { LoginState } from "@/types";

const getAccessToken = (state: LoginState) => {
  return state.accessToken;
};

export { getAccessToken };
