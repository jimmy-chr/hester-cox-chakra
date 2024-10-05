import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";

const theme = extendTheme({
  fonts: {
    heading: "'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",
    body: "'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",
  },
});

const App = () => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Flex direction="column" minHeight="100vh">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Flex>
      </ChakraProvider>
    </Router>
  );
};

export default App;
