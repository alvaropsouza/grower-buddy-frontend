import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import { Tooltip } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function FormButton(props: { text: string }) {
  const { text } = props;
  return (
    <button
      type="submit"
      className="mt-8 rounded-md bg-[#9DD189] p-2 px-9 font-medium text-[#26343b] hover:bg-[#6FBD52] focus:outline-none"
    >
      {text}
    </button>
  );
}

function TermsButton() {
  return (
    <>
      <Tooltip label="Open terms of use">
        <button
          type="button"
          className="mx-2 my-auto h-fit rounded-md bg-[#e0e2c0] p-3 text-[#26343b] hover:bg-[#e0e2c098]"
        >
          <HistoryEduOutlinedIcon />
        </button>
      </Tooltip>
    </>
  );
}

function SigninWithGoogleButton() {
  return (
    <Tooltip label="Feature under construction 🚧" placement="bottom-start">
      <Image
        src="/web_light_rd_SI.svg"
        alt="Signin with google"
        boxSize="38px"
        width="auto"
        className="m-2 grayscale hover:cursor-not-allowed"
      />
    </Tooltip>
  );
}

export { FormButton, TermsButton, SigninWithGoogleButton };
