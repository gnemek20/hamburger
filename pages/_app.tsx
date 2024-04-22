import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>대양ING</title>
      </Head>
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=6kbpgfbf8d"
      />
      <Component {...pageProps} />
    </>
  );
}