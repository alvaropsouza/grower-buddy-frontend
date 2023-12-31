import React, { useState, type FormEvent } from "react";
import { LoginUser } from "../../../services/User/UserService";
import { useRouter } from "next/navigation";
import {
  Spinner,
  FormLogo,
  FormButton,
  SigninWithGoogleButton,
  Divider,
} from "~/components/ui";
import { Link } from "@chakra-ui/react";

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

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoginButton(<Spinner />);
    const { password, email } = loginData;

    const { status } = await LoginUser({ password, email });

    if (status === 200) {
      router.push("/dashboard");
    } else {
      setLoginButton(loginButton);
    }
  };

  return (
    <>
      <FormLogo />
      <form onSubmit={handleLoginSubmit}>
        <div className="flex min-w-fit flex-col items-center justify-center">
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
            className="m-1 p-2  focus:shadow-md focus:outline-none"
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

          <Divider content="or" />
          <SigninWithGoogleButton />
        </div>
      </form>
    </>
  );
}

export { LoginForm };
