import React, { useState, type FormEvent } from "react";
import { loginUser } from "../../services/User/UserService";
import { useRouter } from "next/navigation";
import { FormButton } from "~/components/ui/Buttons";
import Spinner from "~/components/ui/Spinner";
import { Divider, Image } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

export default function LoginForm() {
  const router = useRouter();

  const [loginData, setData] = useState({
    email: "",
    password: "",
  });

  const [loginButton, setLoginButton] = useState(FormButton({ text: "Login" }));

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

    switch (status) {
      case 200:
        router.push("/dashboard");
        break;

      default:
        setLoginButton(loginButton);
        break;
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex w-[90%] flex-col">
          <div className="p-6">
            <Image
              src="/logo.png"
              alt="grower buddy logo"
              boxSize={14}
              width={"auto"}
              className="flex select-none rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="m-1 p-2 px-[auto]  focus:shadow-md focus:outline-none"
              value={loginData.email}
              onChange={handleChange}
              autoComplete="true"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="focus: m-1 p-2  focus:shadow-md focus:outline-none"
              value={loginData.password}
              onChange={handleChange}
              autoComplete="true"
            />
          </div>
          <div className="flex justify-end">
            <small className="cursor-pointer text-[#26343b]">
              <a>Forgot password?</a>
            </small>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {loginButton}
          <Divider className="m-3" />

          <Tooltip
            label="Feature under construction 🚧"
            placement="bottom-start"
          >
            <Image
              src="/web_light_rd_SI.svg"
              alt="Signin with google"
              boxSize="40px"
              width="auto"
              className="m-2 grayscale hover:cursor-not-allowed"
            />
          </Tooltip>
        </div>
      </form>
    </div>
  );
}
