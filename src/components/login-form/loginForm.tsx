import React, { useState, type FormEvent } from "react";
import { loginUser } from "../../services/User/UserService";
import { useRouter } from "next/navigation";
import { LoginButton } from "~/components/ui/Buttons";
import Spinner from "~/components/ui/Spinner";
import { Divider, Image } from "@chakra-ui/react";

export default function LoginForm() {
  const router = useRouter();

  const [loginData, setData] = useState({
    email: "",
    password: "",
  });

  const [loginButton, setLoginButton] = useState(LoginButton);

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const { value } = e.target;
    setData({
      ...loginData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoginButton(<Spinner />);
    const { password, email } = loginData;

    const { status } = await loginUser({ password, email });

    if (status === 200) {
      router.push("/dashboard");
    } else {
      setLoginButton(loginButton);
    }
  };
  return (
    <div className="rounded-md bg-[#f9f9f9] p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <Image
          src="/logo.png"
          alt=""
          boxSize={100}
          width={"auto"}
          className="mb-12 flex select-none rounded-lg"
        />
        <div className="flex w-[90%] flex-col">
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="m-1 p-2 px-[auto]  focus:shadow-md focus:outline-none"
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="focus: m-1 p-2  focus:shadow-md focus:outline-none"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mx-2 flex justify-end">
            <small className="cursor-pointer text-[#26343b]">
              {" "}
              <a>Forgot password?</a>{" "}
            </small>
            <hr className="my-5" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {loginButton}
          <Divider className="m-4" />

          <Image
            src="/web_light_rd_SI.svg"
            alt=""
            boxSize="40px"
            width="auto"
            className=""
          />
        </div>
      </form>
    </div>
  );
}
