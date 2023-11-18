import { toast } from "react-toastify";

const theme = "dark";

export const handleLoginError = (err: any) => {
  const errorMessage = String(err.response.data.body);

  if (errorMessage.includes("not active")) {
    toast("User not active, we sent you another confirmation email", {
      type: "warning",
      theme,
    });
  } else {
    toast("Invalid credentials", { type: "error", theme });
  }

  return { status: Number(err.request.status) };
};

export const handleSignupError = (err: any) => {
  const status = Number(err.request.status);
  const errorMessage = String(err.response.data.body);

  if (errorMessage.includes("not active")) {
    toast("User not active, we sent you another confirmation email", {
      type: "warning",
      theme,
    });
  } else if (errorMessage.includes("already exists")) {
    toast("User already exists", { type: "error", theme });
  } else if (status === 400) {
    toast("Invalid user data", { type: "warning", theme });
  } else {
    toast("Internal server error", { type: "error", theme });
  }
};
