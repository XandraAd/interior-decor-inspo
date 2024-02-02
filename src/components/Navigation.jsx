/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Link as ChakraLink } from "@chakra-ui/react";
import {
  Button,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
  Stack,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Logo3 from "../assets/Logo3.png";


const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.screenY;

      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        className={`navbox ${scrolled ? "scrolled" : ""}`}
        position="fixed"
        top={0}
        left={0}
        
    zIndex={9999}
        w={{base:"100%"}}
        transition="background-color 0.3s ease-in-out"
        bg={scrolled ? "white" : "transparent"}
      >
       
        
          <Breadcrumb separator=" ">
          <BreadcrumbItem>
            <a href="/">
              <img
                src={Logo3}
                alt="Home"
                style={{ width: "10rem", height: "5rem",marginLeft: "2rem" }}
              />{" "}
            </a>
          </BreadcrumbItem>

          <Spacer />

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Button
              marginRight={10}
                leftIcon={<HamburgerIcon />}
                colorScheme="teal"
                onClick={onOpen}
              />

              <Drawer
                isOpen={isOpen}
                placement="right"
                initialFocusRef={firstField}
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent style={{ width: "45%", marginTop: "1.9rem" }}>
                  <DrawerCloseButton />
                  <DrawerBody
                    style={{
                      fontSize: "2rem",
                      color: "gray",
                      marginTop: "2rem",
                    }}
                  >
                    <Stack spacing="24px">
                      <Box>
                        <ChakraLink as={RouterLink} to="/">
                          Home
                        </ChakraLink>
                      </Box>

                      <Box>
                        <ChakraLink as={RouterLink} to="/inspiration">
                          Inspirations
                        </ChakraLink>
                      </Box>

                      <Box>
                        <ChakraLink as={RouterLink} to="/contact">
                          Contact
                        </ChakraLink>
                      </Box>

                      <Box>
                        <ChakraLink as={RouterLink} to="/work">
                          Work
                        </ChakraLink>
                      </Box>
                    </Stack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
       
        
      </Box>
    </>
  );
};

export default Navigation;
