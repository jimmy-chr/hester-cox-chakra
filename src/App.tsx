import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const theme = extendTheme({
  fonts: {
    heading: "'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",
    body: "'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Home />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
