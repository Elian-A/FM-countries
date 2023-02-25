import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Nunito_Sans} from "@next/font/google"

const nunitoSans = Nunito_Sans(
  {
    subsets:["latin"],
    weight: ["300", "600", "800"],
    variable: "--ff-sans"
  }
)

export default function App({ Component, pageProps }: AppProps) {
  return <div className={`${nunitoSans.className}`}>
    <Component {...pageProps} />
  </div>
}
