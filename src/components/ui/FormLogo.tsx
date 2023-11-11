import { Image } from "@chakra-ui/react";

export default function FormLogo() {
  return (
    <div className="flex select-none p-5">
      <Image
        src="/logo.png"
        alt="grower buddy logo"
        boxSize={14}
        width={"auto"}
        className="rounded-lg"
      />
    </div>
  );
}
