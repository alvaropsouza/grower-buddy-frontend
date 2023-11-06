import { Typography, TextField, Divider } from "@mui/material";
import { Button } from "@mui/material";
import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="flex-grow-1 flex flex-col items-center justify-center bg-[#f9f9f9] p-5">
      <Image
        src="/logo.png"
        alt=""
        width={250}
        height={250}
        className="m-10 flex select-none rounded-lg"
      />
      <div>
        <TextField label="Email" type="email" id="email " className="m-1" />
        <TextField
          label="Password"
          type="password"
          id="password "
          className="m-1"
        />
        <div className="m mx-5 flex justify-end">
          <Typography
            variant="subtitle2"
            className="cursor-pointer text-[#26343b]"
          >
            {" "}
            <a>Forgot password?</a>{" "}
          </Typography>
        </div>
        <Divider className="my-5" />
        <div className="font-Roboto flex items-end justify-end">
          <Button
            variant="text"
            className="m-6 bg-[#9DD189]  text-[#26343b] hover:bg-[#6FBD52]"
          >
            Login
          </Button>
        </div>
        <Divider />
      </div>
    </div>
  );
}
