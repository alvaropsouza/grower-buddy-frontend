import React, { useState, type FormEvent } from "react";
import { LoginUser } from "../../../services/User/UserService";
import { useRouter } from "next/navigation";
import {
  Spinner,
  FormLogo,
  FormButton,
  SigninWithGoogleButton,
} from "~/components/ui";
import { Divider, Link } from "@chakra-ui/react";

function LoginForm() {
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

    const { status } = await LoginUser({ password, email });

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
    <>
      <FormLogo />
      <form onSubmit={handleSubmit}>
        <div className="flex w-[90%] flex-col items-center justify-center">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="m-1 p-2 px-[auto]  focus:shadow-md focus:outline-none"
            value={loginData.email}
            onChange={handleChange}
            autoComplete="true"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="focus: m-1 p-2  focus:shadow-md focus:outline-none"
            value={loginData.password}
            onChange={handleChange}
            autoComplete="true"
            required
          />
          <div className="ml-auto mr-8 flex">
            <small className="cursor-pointer text-[#676d70]">
              <Link className="hover:no-underline">Forgot password?</Link>
            </small>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {loginButton}
          <Divider className="m-3" />
          <SigninWithGoogleButton />
        </div>
      </form>
    </>
  );
}

export { LoginForm };
