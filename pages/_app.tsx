import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/Header/index";
import RootLayout from "../components/RootLayout";
import { useBlob } from "../lib/hooks/useBlob";

export default function App({ Component, pageProps }: AppProps) {
  const ref = useBlob<HTMLDivElement>();

  return (
    <>
      <div ref={ref} className="blob" />
      <RootLayout>
        <Header />
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
