import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </ChakraProvider>
}

export default MyApp
