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

export const loginUser = async (
  userData: LoginUserType,
): Promise<{ status: number }> => {
  try {
    const response = await axios.post(
      "https://users-ms-production.up.railway.app/user/login",
      userData,
    );

    const { status } = response;

    toast("Logged in", { type: "success", theme });

    return { status };
  } catch (err: any) {
    toast("Invalid credentials", { type: "error", theme });

    return { status: Number(err.request.status) };
  }
};

export const SignupUser = async (
  userData: LoginUserType,
): Promise<{ status: number }> => {
  try {
    const response = await axios.post(
      "https://users-ms-production.up.railway.app/user/login",
      userData,
    );

    const { status } = response;

    toast("Logged in", { type: "success", theme });

    return { status };
  } catch (err: any) {
    toast("Invalid credentials", { type: "error", theme });

    return { status: Number(err.request.status) };
  }
};
