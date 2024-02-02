/* eslint-disable no-unused-vars */
import React from "react";
import { Box, HStack, VStack,Container } from "@chakra-ui/react";
import { FaFacebookF,FaTwitter ,FaInstagramSquare,FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container
        bg={"gray.200"}
        mt={10}
        maxW={{base:"container.sm",md:"container.xl"}}
        p={4}
>
        <HStack  
        

flexDir={{ base: "column", md: "row" }}
spacing={{ base: 4, md: 8 }}
justify={{ base: "center", md: "space-between" }}
align={{ base: "center", md: "flex-start" }}
       
        >
          
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
              <HStack className=" social-icons">
                <FaPinterestSquare />
              <FaFacebookF/>
              <FaTwitter/>
              <FaInstagramSquare/>
            </HStack>
            </VStack>
              
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default Footer;
