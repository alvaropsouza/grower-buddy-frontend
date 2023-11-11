import React, { useState, type FormEvent } from "react";
import { loginUser } from "../../services/User/UserService";
import { useRouter } from "next/navigation";
import { FormButton } from "~/components/ui/Buttons";
import Spinner from "~/components/ui/Spinner";
import { Divider, Image, Checkbox } from "@chakra-ui/react";
import TermsOfServiceModal from "~/components/ui/TermsOfservice";

export default function SignupForm() {
  const router = useRouter();

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [signupButton, setsignupButton] = useState(
    FormButton({ text: "Signup" }),
  );

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

    switch (status) {
      case 200:
        router.push("/dashboard");
        break;

      default:
        setsignupButton(signupButton);
        break;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md">
        <div className="flex w-[90%] flex-col">
          <div className="p-6">
            <Image
              src="/logo.png"
              alt=""
              boxSize={14}
              width={"auto"}
              className="flex select-none rounded-full"
            />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="m-1 p-2 focus:shadow-md focus:outline-none"
            value={signupData.name}
            onChange={handleChange}
            autoComplete="true"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="m-1 p-2 px-[auto] focus:shadow-md focus:outline-none"
            value={signupData.email}
            onChange={handleChange}
            autoComplete="true"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="m-1 p-2 px-[auto]  focus:shadow-md focus:outline-none"
            value={signupData.password}
            onChange={handleChange}
            autoComplete="true"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          {signupButton}
        </div>
        <Divider className="my-3" />
        <div className="flex justify-around align-bottom">
          <TermsOfServiceModal />
          <div className="m-2 flex flex-col text-left">
            <Checkbox className="p-1">
              <small>I have read and agree with terms of use</small>
            </Checkbox>

            <Checkbox className="p-1">
              <small>Send me news mail? </small>
            </Checkbox>
          </div>
        </div>
      </div>
    </form>
  );
}
