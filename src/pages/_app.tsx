import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default api.withTRPC(App);
