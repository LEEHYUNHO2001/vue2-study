import {
  nameRegex,
  phoneNumberRegex,
  emailRegex,
} from "@/constants/validation";
import { UserPost } from "@/types";

export const allValidate = (user: UserPost) => {
  if (
    !emptyValidate(user) &&
    !userNameValidate(user) &&
    !phoneNumberValidate(user) &&
    !emailValidate(user)
  )
    return true;
};
const emptyValidate = (user: UserPost) => {
  const { name, phoneNumber, email } = user;
  if (!name || !phoneNumber || !email) {
    alert("모두 입력해주세요.");
    return true;
  }
};
const userNameValidate = (user: UserPost) => {
  const { name } = user;
  if (
    !nameRegex.test(name) ||
    name.length > 20 ||
    name.split(" ").join("").length === 0
  ) {
    alert("20자리 이하의 영문 + 띄어쓰기 조합으로 이름을 적어주세요.");
    return true;
  }
};
const phoneNumberValidate = (user: UserPost) => {
  const { phoneNumber } = user;
  if (!phoneNumberRegex.test(phoneNumber) || phoneNumber.length > 10) {
    alert("10자리 이하의 숫자만 입력해주세요.");
    return true;
  }
};
const emailValidate = (user: UserPost) => {
  const { email } = user;
  if (!emailRegex.test(email) || email.length > 40) {
    alert("40자리 이하의 이메일 형식으로 입력해주세요.");
    return true;
  }
};
