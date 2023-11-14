import axios from "axios";
import { toast } from "react-toastify";

const theme = "dark";

type LoginUserType = {
  email: string;
  password: string;
};

type RegisterUserType = {
  email: string;
  password: string;
  name: string;
};

export const LoginUser = async (
  userData: LoginUserType,
): Promise<{ status: number }> => {
  try {
    const response = await axios.post(
      "https://users-ms-production.up.railway.app/user/login",
      userData,
    );

    const { status } = response;
    console.log(status);

    toast("Logged in", { type: "success", theme });

    return { status };
  } catch (err: any) {
    console.log(err);
    toast("Invalid credentials", { type: "error", theme });

    return { status: Number(err.request.status) };
  }
};

export const SignupUser = async (
  userData: RegisterUserType,
): Promise<{ status: number }> => {
  try {
    const response = await axios.post(
      "https://users-ms-production.up.railway.app/user/signup",
      userData,
    );

    const { status } = response;

    toast(
      "Succesfully registered, we sent you a email to confirm your account",
      { type: "success", theme },
    );

    return { status };
  } catch (err: any) {
    const status = Number(err.request.status);

    status === 400
      ? toast("Invalid user data", { type: "warning", theme })
      : toast("Internal server error", { type: "error", theme });

    return { status };
  }
};
