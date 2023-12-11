import { Image } from "@chakra-ui/react";

function FormLogo() {
  return (
    <div className="flex select-none items-center justify-center p-5">
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

function FormLogoNoBg() {
  return (
    <div className="flex select-none items-center justify-center">
      <Image
        src="/gb-logo-no-background.png"
        alt="grower buddy logo"
        boxSize={14}
        width={"auto"}
        className="rounded-lg"
      />
    </div>
  );
}

export { FormLogo, FormLogoNoBg };
