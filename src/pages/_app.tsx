import "react-toastify/dist/ReactToastify.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
