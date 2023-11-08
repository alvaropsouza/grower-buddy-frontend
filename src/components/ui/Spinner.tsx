import { Spinner as SpinnerChakra } from "@chakra-ui/react";

export default function Spinner() {
  return (
    <div role="status" className="mt-12 flex items-center justify-center p-1">
      <SpinnerChakra color="green" size="lg" />
    </div>
  );
}
