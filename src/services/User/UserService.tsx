import axios from "axios";
import { toast } from "react-toastify";
import { handleLoginError, handleSignupError } from "./ErrorHandler";
import { type UserType, type RegisterUserType } from "./Types";

const theme = "dark";

const baseURL = "https://users-ms-production.up.railway.app/user/";

const loginUserRequest = async (userData: UserType) => {
  try {
    const response = await axios.post(`${baseURL}login`, userData);
    const { status } = response;

    toast("Logged in successfully", { type: "success", theme });

    return { status };
  } catch (err: any) {
    return handleLoginError(err);
  }
};

const signupUserRequest = async (userData: RegisterUserType) => {
  try {
    const response = await axios.post(`${baseURL}signup`, userData);
    const { status } = response;

    toast(
      "Successfully registered, we sent you an email to confirm your account",
      {
        type: "success",
        theme,
      },
    );

    return { status };
  } catch (err: any) {
    handleSignupError(err);
  }
};

export { loginUserRequest as LoginUser, signupUserRequest as SignupUser };
