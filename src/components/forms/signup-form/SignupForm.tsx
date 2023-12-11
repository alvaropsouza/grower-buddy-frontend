import React, { useState, type FormEvent } from "react";
import { SignupUser } from "../../../services/User/UserService";
import {
  Spinner,
  FormLogo,
  FormButton,
  TermsOfServiceModal,
} from "~/components/ui";
import { Divider, Checkbox } from "@chakra-ui/react";

export function SignupForm() {
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
    const { password, email, name } = signupData;

    await SignupUser({ password, email, name });

    setsignupButton(signupButton);
  };

  return (
    <>
      <FormLogo />
      <form onSubmit={handleSubmit}>
        <div className="flex w-[90%] flex-col items-center justify-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="m-1 p-2 focus:shadow-md focus:outline-none"
            value={signupData.name}
            onChange={handleChange}
            autoComplete="true"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="m-1 p-2 px-[auto] focus:shadow-md focus:outline-none"
            value={signupData.email}
            onChange={handleChange}
            autoComplete="true"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="m-1 p-2 px-[auto]  focus:shadow-md focus:outline-none"
            value={signupData.password}
            onChange={handleChange}
            autoComplete="true"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          {signupButton}
        </div>
        <Divider className="my-3" />
        <div className="flex justify-around align-bottom">
          <TermsOfServiceModal />
          <div className="m-2 flex flex-col text-left">
            <Checkbox className="p-1" required>
              <small>I have read and agree with terms of use</small>
            </Checkbox>

            <Checkbox className="p-1">
              <small>Send me news mail? </small>
            </Checkbox>
          </div>
        </div>
      </form>
    </>
  );
}
