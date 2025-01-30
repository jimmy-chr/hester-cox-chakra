import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
import Collection from "./pages/Collection";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";
import CollectionDetails from "./pages/collection/CollectionDetails";
import AccessoryDetails from "./pages/collection/AccessoryDetails";
import CareMaintenance from "./pages/CareMaintenance";

const theme = extendTheme({
  fonts: {
    heading: "'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",
    body: "'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",
  },
  styles: {
    global: {
      p: {
        margin: "1em 0", // Add margin around <p> elements
      },
      li: {
        margin: "0.5em 0", // Add margin around <p> elements
      },
    },
  },
});

const App = () => {
  useScrollToTop();
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minHeight="100vh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<CollectionDetails />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/:id" element={<AccessoryDetails />} />
          <Route path="/care-maintenance" element={<CareMaintenance />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
