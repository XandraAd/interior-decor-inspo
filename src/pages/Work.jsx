/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Box, Image, Text } from "@chakra-ui/react";
import bath from "../design-images/480x270/1 (12).jpg";

const Work = () => {
  return (
    <>
      <Box mt={20} p={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image borderRadius="lg" width={{ md: 600 }} src={bath} alt="" />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Love Story
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Gaba Essence
          </Link>
          <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>
        </Box>
      </Box>
      <Box mt={20} p={4} display={{ md: "flex" }}>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Urban Space
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Moosh Villa
          </Link>
          <Text mt={2} color="gray.500">
            &#35;UrbanSophisticated &#35;Apartment &#35;Elegant &#35;Bespoke
            &#35;InnerDesire &#35;Residential &#35;TimelessDesign
            &#35;SelectedWorks &#35;Contemporary &#35;ArtExperience
            &#35;BoldColors
          </Text>
        </Box>
        <Box flexShrink={0}>
          <Image borderRadius="lg" width={{ md: 600 }} src={bath} alt="" />
        </Box>
      </Box>
      <Box mt={20} p={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image borderRadius="lg" width={{ md: 600 }} src={bath} alt="" />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Apartment
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            TimeLess Villa
          </Link>
          <Text mt={2} color="gray.500">
            &#35;Apartment &#35;UrbanSophisticated &#35;TimelessDesign
            &#35;ArtExperience &#35;Contemporary &#35;Bespoke &#35;InnerDesire
            &#35;Luxury
          </Text>
        </Box>
      </Box>
      <Box mt={20} p={4} display={{ md: "flex" }}>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Condo
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            PearlSimons Home
          </Link>
          <Text mt={2} color="gray.500">
            &#35;Hotel&Business &#35;Contemporary &#35;CustomMade
            &#35;TimelessDesign &#35;SelectedWorks &#35;Modern &#35;Bespoke
            &#35;InnerDesire &#35;Luxury
          </Text>
        </Box>
        <Box flexShrink={0}>
          <Image borderRadius="lg" width={{ md: 600 }} src={bath} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default Work;
