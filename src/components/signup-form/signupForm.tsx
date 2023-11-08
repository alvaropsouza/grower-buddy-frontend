import React, { useState, type FormEvent } from "react";
import { loginUser } from "../../services/User/UserService";
import { useRouter } from "next/navigation";
import { SignupButton } from "~/components/ui/Buttons";
import Spinner from "~/components/ui/Spinner";
import { Divider, Image } from "@chakra-ui/react";

export default function SignupForm() {
  const router = useRouter();

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
  });

  const [signupButton, setsignupButton] = useState(SignupButton);

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const { value } = e.target;
    setSignupData({
      ...signupData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setsignupButton(<Spinner />);
    const { password, email } = signupData;

    const { status } = await loginUser({ password, email });

    if (status === 200) {
      router.push("/dashboard");
    } else {
      setsignupButton(signupButton);
    }
  };
  return (
    <div className="rounded-md bg-[#f9f9f9] p-2">
      <form
        onSubmit={handleSubmit}
        className="align-text-center flex flex-col items-center justify-center"
      >
        <Image
          src="/logo.png"
          alt=""
          boxSize={100}
          width={"auto"}
          className="mb-12 flex select-none rounded-md"
        />
        <div className="flex w-[80%] flex-col">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="m-1 w-[50%] p-2 focus:shadow-md focus:outline-none"
                value={signupData.name}
                onChange={handleChange}
                autoComplete="true"
              />
              <input
                type="lastName"
                placeholder="Last Name"
                name="lastName"
                className="focus: m-1 w-[50%]  p-2 focus:shadow-md focus:outline-none"
                value={signupData.lastName}
                onChange={handleChange}
                autoComplete="true"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="m-1 p-2 px-[auto]  focus:shadow-md focus:outline-none"
              value={signupData.email}
              onChange={handleChange}
              autoComplete="true"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="focus: m-1 p-2  focus:shadow-md focus:outline-none"
              value={signupData.password}
              onChange={handleChange}
              autoComplete="true"
            />
          </div>
          <div className="mx-2 flex justify-end">
            <small className="cursor-pointer text-[#26343b]">
              <a>Forgot password?</a>
            </small>
            <hr className="my-5" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {signupButton}
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
