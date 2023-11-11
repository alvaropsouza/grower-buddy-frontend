import Head from "next/head";
import LoginSignupForm from "~/components/forms/login-signup-form/LoginSignupForm";

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

      <main className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-[#26343b]">
        <LoginSignupForm />
      </main>
    </>
  );
}
