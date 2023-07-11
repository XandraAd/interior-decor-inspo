/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Container,
  Image,
  Stack,
  Grid,
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";
import Home1 from "../design-images/Carousel_images/livingArea.jpg";
import Home2 from "../design-images/Carousel_images/modernStyle.jpg";
import Sofa from "../design-images/Carousel_images/comfortZone.jpg";
import LivingArea from "../design-images/Carousel_images/Kitchen.jpg";
import Carousel3 from "../design-images/Carousel_images/bedroom.jpg";
import Display from "../design-images/Carousel_images/chic.jpg";
import PortLivingArea from "../design-images/Carousel_images/portLivingArea.jpg";
import Forms from "../scenes/Forms";

const Home = () => {
  return (
    <>
      <Center>
        <Box mx="auto" position="relative">
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
              <img src={Home2} alt="bedroom deco" />
              <p className="legend">Image 1</p>
            </div>
            <div>
              <img src={Sofa} alt="sofa" />
              <p className="legend">Image 2</p>
            </div>
            <div>
              <img src={Display} alt="showroom display" />
              <p className="legend">Image 3</p>
            </div>
            <div>
              <img src={Carousel3} alt="bedroom deco" />
              <p className="legend">Image 4</p>
            </div>
            <div>
              <img src={Home1} alt="sofa" />
              <p className="legend">Image 5</p>
            </div>
            <div>
              <img src={LivingArea} alt="showroom display" />
              <p className="legend">Image 6</p>
            </div>
          </Carousel>
          <style>
            {`
            .carousel .carousel-status {
              display: none;
            }
          `}
          </style>
        </Box>
      </Center>
      <Center>
        <Box mt={5}>
          <Grid templateColumns="repeat(2, 1fr)">
            <Image boxSize="600px" src={PortLivingArea} alt="bedroom deco" />
            <Container textAlign="center" lineHeight={2} pr={0} pl={10}>
              At our core, we strive to craft distinctive environments that are
              truly one-of-a-kind. Each space we create is meticulously refined,
              exuding a sense of cleanliness and timelessness. However, what
              sets us apart is our adaptability and versatility when it comes to
              working with different styles. We pride ourselves on seamlessly
              translating our clients unique visions into reality. Whether it is
              a contemporary aesthetic, a classic ambiance, or anything in
              between, we embrace the opportunity to bring our clients wishes to
              life in the most remarkable and personalized way.
            </Container>
          </Grid>
        </Box>
      </Center>
      <Box mt={5}>
        <Grid templateColumns="repeat(3, 1fr)" gridGap={4}>
          <Box>
            <Image boxSize="400px" src={Home2} alt="bedroom deco" />
          </Box>
          <Box>
            <Image boxSize="400px" src={Home2} alt="bedroom deco" />
          </Box>
          <Box>
            <Image boxSize="400px" src={Home2} alt="bedroom deco" />
          </Box>
        </Grid>
      </Box>
      <Center>
        <Box
          mt={5}
          width="90%"
          backgroundImage="url('/images/kyuubi.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Carousel showThumbs={false}>
            <div>
              <img src={Home2} alt="bedroom deco" />
              <p className="legend">Image 1</p>
            </div>
          </Carousel>
          <style>
            {`
            .carousel .carousel-status {
              display: none;
            }
          `}
          </style>
        </Box>
      </Center>
      <Center>
        <Box
          mt={10}
          width={700}
          height={500}
          boxShadow="0 0 10px 2px rgba(0, 0, 0, 0.2)"
          _hover={{
            outline: "1px solid #B7b6b4",
          }}
        >
          <Flex direction="column" alignItems="center">
            <Forms />
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default Home;
