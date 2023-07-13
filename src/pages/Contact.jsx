/* eslint-disable no-unused-vars */
import React from "react";
import { Center, Box, Image } from "@chakra-ui/react";
import ComfortZone from "../design-images/Carousel_images/comfortZone.jpg";

import MakkLieslQR from "../design-images/Carousel_images/MakkLiesl_qrCode.png"
import Forms from "../scenes/Forms";

const Contact = () => {
  return (
    <>
      <Center>
        <Box>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", lg: "900" }}
            src={ComfortZone}
            alt=""
          />
          <Center>
            <Box lineHeight={2} mt={10}>
              <h5 className="contact-heading">Contacts and Availability</h5>

              <p className="contact-para">GPS-2454-676</p>
              <p className="contact-para">+233 454 6789/+233 508 6767</p>
              <a href="mailto:info@makkliesl.com" className="mail-link">
                info@makkliesl.com
              </a>
              <span className="border mt:10px ">
              <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200" }}
            src={MakkLieslQR}
            alt=""
          />
              </span>
              <a href=""></a>
              <span>
                <Forms />
              </span>
            </Box>
            <Box>
              
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default Contact;
