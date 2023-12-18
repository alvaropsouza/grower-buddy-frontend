import axios from "axios";
import { toast } from "react-toastify";
import { userErrorHandler } from "./UserErrorHandler";
import { type UserType, type RegisterUserType } from "./Types";

const theme = "dark";

const baseURL = "https://users-ms-production.up.railway.app/user";

const loginUserRequest = async (userData: UserType) => {
  try {
    const url = `${baseURL}/login`;

    const response: { status: number } = await axios.post(url, userData);

    const { status } = response;

    toast("Login succesfully!", { type: "success", theme });

    return { status };
  } catch (err: any) {
    const { status } = userErrorHandler(
      err.response.status,
      err.response.data.body,
    );

    return { status };
  }
};

const signupUserRequest = async (userData: RegisterUserType) => {
  try {
    const url = `${baseURL}/signup`;

    const response: { status: number } = await axios.post(url, userData);

    const { status } = response;

    toast(
      "🎉 Success! You're now part of Grower Buddy's community! Check your email inbox or spam for a confirmation email we sent.",
      {
        type: "success",
        theme,
      },
    );

    return { status };
  } catch (err: any) {
    const { status } = userErrorHandler(
      err.response.status,
      err.response.data.body,
    );

    return { status };
  }
};

// try {
//   const url = `${baseURL}/signup`;

//   const response = await axios.post(url, userData);
//   const { status } = response;

//   toast(
//     "Successfully registered, we sent you an email to confirm your account",
//     {
//       type: "success",
//       theme,
//     },
//   );

//   return { status };
// } catch (err: any) {
//   handleSignupError(err);
// }

export { loginUserRequest as LoginUser, signupUserRequest as SignupUser };
