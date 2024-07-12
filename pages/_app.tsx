import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>대양ING</title>
        <meta property="og:description" content="옷에 새로운 날개를 달다" />
        <meta property="og:image" content="https://llpb2hr4wxbuf0dj.public.blob.vercel-storage.com/DaeYang-ceGeJm40N8tOMcF6PzPhUwwzHrrpvp.jpg" />
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