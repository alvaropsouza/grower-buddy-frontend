import Head from "next/head";
import { LoginSignupForm } from "~/components/forms";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Grower Buddy</title>
        <meta
          name="description"
          content="Your grower helper. Keep track of every aspect about your plants"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-[#121212]">
        <motion.div
          animate={{ y: [15, 0] }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <LoginSignupForm />
        </motion.div>
      </main>
    </>
  );
}
