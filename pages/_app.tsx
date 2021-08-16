import '../styles/globals.css'
import type { AppProps } from 'next/app'

export const SOMETHING = 'something'
SOMETHING = 'somethingelse 2'
let somethingelse = 'test'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
