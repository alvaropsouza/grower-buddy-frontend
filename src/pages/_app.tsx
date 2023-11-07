import "react-toastify/dist/ReactToastify.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { ToastContainer } from "react-toastify";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
};

export default MyApp;
