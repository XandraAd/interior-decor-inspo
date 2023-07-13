/* eslint-disable no-unused-vars */
import React from "react";
import { Box, HStack, VStack, Center, Grid } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Center
        bg={"gray.200"}
        mt={10}
        gridtemplateArea={{ base: "1fr", md: "repeat(2, 1fr)", lg: "auto" }}
        gap={4}
      >
        <HStack gap={"5rem"} p={10} m={10}>
          <Box>
            <VStack>
              <h3 className="request">Explore our site</h3>
              <a href="/" className="para_request">
                Home
              </a>
              <a href="/inspiration" className="para_request">
                Inspiration
              </a>
              <a href="/work" className="para_request">
                Work
              </a>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <h3 className="request">Customer Support</h3>
              <a href="/contact" className="para_request">
                Contact us
              </a>
              <a href="/quotation" className="para_request">
                Quotation Request
              </a>
              <a href="/terms" className="para_request">
                Terms and Conditions
              </a>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <h3 className="request">Contact Us</h3>
              <p className="para_request">
                Digital Address:GE-202-3567
                <br /> Greater Accra
                <br /> Ghana <br />
                Call +351 210 939 810 / +351 961 694 781
              </p>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <h3 className="request">Social Networks</h3>
            </VStack>
          </Box>
        </HStack>
      </Center>
    </>
  );
};

export default Footer;
