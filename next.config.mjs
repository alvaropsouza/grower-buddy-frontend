await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  redirects: async () => {
    return [
      // Adicione mais redirecionamentos conforme necessário
    ];
  },
};

export default config;
