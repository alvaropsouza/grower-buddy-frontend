import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import { Tooltip } from "@chakra-ui/react";

export function LoginButton() {
  return (
    <button
      type="submit"
      className="mt-8 rounded-md bg-[#9DD189] p-2 px-9 text-[#26343b] hover:bg-[#6FBD52] focus:outline-none"
    >
      Login
    </button>
  );
}

export function SignupButton() {
  return (
    <button
      type="submit"
      className="mt-8 rounded-md bg-[#9DD189] p-2 px-9 text-[#26343b] hover:bg-[#6FBD52] focus:outline-none"
    >
      Signup
    </button>
  );
}

export function TermsButton() {
  return (
    <>
      <Tooltip label="Open terms of use">
        <button
          type="submit"
          className="mx-3 my-auto h-fit rounded-md bg-[#e0e2c0] p-3 text-[#26343b] hover:bg-[#e0e2c098]"
        >
          <HistoryEduOutlinedIcon />
        </button>
      </Tooltip>
    </>
  );
}
