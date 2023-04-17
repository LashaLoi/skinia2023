import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { BlobScript } from "../lib/scripts/blob";

import { Header } from "../components/Header/index";
import RootLayout from "../components/RootLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="blob" className="blob" />
      <RootLayout>
        <Header />
        <Component {...pageProps} />
      </RootLayout>

      <BlobScript />
    </>
  );
}
