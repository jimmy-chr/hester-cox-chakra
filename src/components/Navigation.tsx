import {
  Link,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link as ReactRouterLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const isMobile = useBreakpointValue({ base: true, md: false }); // base = mobile, md = desktop+
  const { t } = useTranslation();
  const links = [
    { name: t("menu.collection"), path: "/collection" },
    { name: t("menu.accessories"), path: "/accessories" },
    { name: t("menu.about-me"), path: "/about-me" },
    { name: t("menu.contact"), path: "/contact" },
  ];

  return (
    <>
      <HStack
        alignItems="center"
        display={{ base: "none", md: "flex" }}
        as="nav"
      >
        {links.map((link) => (
          <Link mx={"1em"} as={ReactRouterLink} to={link.path} key={link.name}>
            {link.name}
          </Link>
        ))}
      </HStack>
      {/* Mobile Hamburger Icon */}
      <IconButton
        variant="subtle"
        fontSize={"2em"}
        size="lg"
        icon={isOpen ? <MdClose /> : <MdMenu />}
        aria-label="Open Menu"
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        bg="green.800"
        color="orange.50"
      />
      {/* Mobile Drawer Menu */}
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack as="nav" spacing={4}>
              {links.map((link) => (
                <Link
                  mx={"1em"}
                  as={ReactRouterLink}
                  to={link.path}
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navigation;
