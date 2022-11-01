import { ChakraProvider } from "@chakra-ui/react";

//components
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
