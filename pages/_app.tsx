import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from "@next/font/local";
const manrope = localFont({
  src: "../public/fonts/Manrope-Regular.ttf"
});
export default function App({ Component, pageProps }: AppProps) {
  return (

      <Component {...pageProps} />
  );
}
