import axios from "axios";
import { toast } from "react-toastify";
import { handleLoginError, handleSignupError } from "./ErrorHandler";

const theme = "dark";

type UserType = {
  email: string;
  password: string;
};

type RegisterUserType = {
  name: string;
} & UserType;

const baseURL = "https://users-ms-production.up.railway.app/user/";

const loginUserRequest = async (userData: UserType) => {
  try {
    const response = await axios.post(`${baseURL}login`, userData);
    const { status } = response;

    toast("Logged in", { type: "success", theme });

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
