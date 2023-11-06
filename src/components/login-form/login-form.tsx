import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-[#f9f9f9] p-8">
      <Image
        src="/logo.png"
        alt=""
        width={280}
        height={0}
        style={{
          height: "auto",
        }}
        className="mx-10 mb-9 mt-5 flex select-none rounded-lg"
      />
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="m-1 p-2 px-[auto]  focus:shadow-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="focus: m-1 p-2  focus:shadow-md focus:outline-none "
          />
        </div>
        <div className="mx-2 flex justify-end">
          <small className="cursor-pointer text-[#26343b]">
            {" "}
            <a>Forgot password?</a>{" "}
          </small>
          <hr className="my-5" />
        </div>
        <button className="mt-12 rounded-md bg-[#9DD189] p-2 text-[#26343b] hover:bg-[#6FBD52] focus:outline-none">
          Login
        </button>
      </div>
    </div>
  );
}
