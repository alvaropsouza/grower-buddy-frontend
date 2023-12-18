import { Image } from "@chakra-ui/react";

function FormLogo() {
  return (
    <div className="flex select-none items-center justify-center p-5">
      <Image
        src="/logo.png"
        alt="grower buddy logo"
        boxSize={8}
        width={"auto"}
        className="w-max rounded-lg"
      />
    </div>
  );
}

function BannerLogo() {
  return (
    <div className="flex select-none items-center justify-center">
      <Image
        src="/gb-logo-no-background.png"
        alt="grower buddy logo"
        boxSize={10}
        width={"auto"}
      />
    </div>
  );
}

export { FormLogo, BannerLogo };
