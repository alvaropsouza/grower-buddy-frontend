import { toast } from "react-toastify";
import { type AxiosErrorResponse } from "./Types";

const theme = "dark";

export const handleLoginError = (err: AxiosErrorResponse) => {
  const errorMessage = err.response.data.body;
  const status = err.request.status;

  if (errorMessage.includes("not active")) {
    toast("User not active, we sent you another confirmation email", {
      type: "warning",
      theme,
    });

    return { status };
  }

  toast("Invalid credentials", { type: "error", theme });

  return { status };
};

export const handleSignupError = (err: AxiosErrorResponse) => {
  const status = err.request.status;
  const { body } = err.response.data;
  const isInvalidPassword = body.errors.filter(
    (error: { param: string }) => error.param === "password",
  );

  if (body.includes("not active")) {
    toast("User not active, we sent you another confirmation email", {
      type: "warning",
      theme,
    });
  } else if (body.includes("already exists")) {
    toast("User already exists", { type: "error", theme });
  } else if (isInvalidPassword) {
    toast(
      `Password must have at least 8 characters,
       1 lowercase, 1 uppercase, 1 number
      and 1 special character`,
      {
        type: "warning",
        theme,
      },
    );
  } else if (status === 400) {
    toast("Invalid user data", { type: "warning", theme });
  } else {
    toast("Internal server error", { type: "error", theme });
  }
};
