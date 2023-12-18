import { toast } from "react-toastify";

const theme = "dark";

export const userErrorHandler = (
  status: number,
  body: { errors: [{ param: string }] },
): { status: number } => {
  if (Array.isArray(body.errors)) {
    const isPasswordWeak = body.errors.some((error: { param: string }) =>
      error.param === "password" ? true : false,
    );

    if (isPasswordWeak) {
      toast("Weak Password!", { type: "warning", theme });

      return { status };
    }
  }

  switch (status) {
    case 200:
      toast("Invalid email or password", { type: "warning", theme });
      break;

    case 403:
      if (String(body).includes("not active")) {
        toast("User not active, we sent you another confirmation email", {
          type: "warning",
          theme,
        });
      }
      break;

    case 400:
      toast("Invalid user data", { type: "warning", theme });
      break;

    case 404:
      toast("User not found", { type: "warning", theme });
      break;

    default:
      toast("Internal server error", { type: "error", theme });
      break;
  }

  return { status };
};
