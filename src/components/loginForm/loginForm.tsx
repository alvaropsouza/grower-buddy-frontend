/* eslint-disable @typescript-eslint/unbound-method */
import React, { useState, type FormEvent } from "react";
import Image from "next/image";
import { loginUser } from "../../services/User/UserService";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [loginData, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { value: unknown; name: string } }) => {
    const { value } = e.target;
    setData({
      ...loginData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { password, email } = loginData;

    const { status } = await loginUser({ password, email });

    if (status === 200) {
      router.push("/dashboard");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center rounded-md bg-[#f9f9f9] p-8 shadow-lg"
      >
        <Image
          src="/logo.png"
          alt=""
          width={260}
          height={0}
          style={{
            height: "auto",
          }}
          className="mx-10 mb-12 mt-5 flex select-none rounded-lg"
        />
        <div className="flex flex-col ">
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
          <button
            type="submit"
            className="mt-12 rounded-md bg-[#9DD189] p-2 text-[#26343b] hover:bg-[#6FBD52] focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
