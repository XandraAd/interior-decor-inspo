/* eslint-disable no-unused-vars */
import React from "react";
import {
  Grid,
  GridItem,
  Card,
  Image,
  Stack,
  VStack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Box,
  Center,
} from "@chakra-ui/react";

import SpaceJoy from "../design-images/Carousel_images/spacejoy1.jpg"
import Life from "../design-images/Carousel_images/clean&Simple.jpg";
import WhiteInterior from "../design-images/Carousel_images/modernStyle.jpg";

const Inspiration = () => {
  


  return (
    <>
      <Grid
        mt={1}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)",lg:"repeat(4,1fr)" }}
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={{ base: "auto", md: 1}}>
          <Card
            direction={{ base: "column" ,lg: "row"}}
            overflow="hidden"
            variant="outline"
            h="100%"
          >
            
              <VStack>
              <Image
                src={SpaceJoy}
                alt="Orange Sofa with Plants setting"
                borderRadius="md"
                objectFit="cover"
                maxW={{ base: "100%", md: "500px" }}
               h={"100vh"}
               
              />
             
             
              <CardBody>
                <Heading size="md">Living room Sofa</Heading>
                <Text lineHeight={2} py={2}>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                  <br />
                  <br />
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                  <br />
                  <br />
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                  <br />
                  <br />
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                  <br />
                  <br />
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Learn More
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Explore With Us
                </Button>
              </ButtonGroup>
            </CardFooter>
              </VStack>
         
           
          </Card>
        </GridItem>

        <GridItem colSpan={3}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <Center>
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "900px" }}
                  src={WhiteInterior}
                  alt="Caffe Latte"
                />
              </Center>

              <Stack>
                <CardBody>
                  <Heading size="md">The perfect Space</Heading>

                  <Text py="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    iste incidunt ipsam, magni earum officiis? Dolore, quidem
                    neque. Adipisci reiciendis aperiam omnis soluta expedita
                    animi dolores non quidem nobis enim.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Learn More
                  </Button>
                </CardFooter>
              </Stack>
            </Stack>
          </Card>
        </GridItem>

        <GridItem colSpan={3}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <Center>
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "900px" }}
                  src={Life}
                  alt="Caffe Latte"
                />
              </Center>

              <Stack>
                <CardBody>
                  <Heading size="md">The perfect Space</Heading>

                  <Text py="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    iste incidunt ipsam, magni earum officiis? Dolore, quidem
                    neque. Adipisci reiciendis aperiam omnis soluta expedita
                    animi dolores non quidem nobis enim.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Learn More
                  </Button>
                </CardFooter>
              </Stack>
            </Stack>
          </Card>
        </GridItem>
        <GridItem colSpan={2}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "900px" }}
                src={WhiteInterior}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                
                  <Heading size="md">The perfect Space</Heading>

                  <Text py="2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla cupiditate saepe aspernatur natus. Totam earum voluptas, inventore quidem eaque dicta explicabo perferendis consectetur ex minus cumque cupiditate fugiat. Omnis, asperiores.
                  Reiciendis fuga, quo incidunt, beatae impedit facere recusandae, debitis nesciunt obcaecati eum quos aperiam iste perspiciatis. Maxime aperiam numquam, facilis exercitationem consectetur sed asperiores minima perferendis saepe ipsam nobis repudiandae?
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Learn More
                  </Button>
                </CardFooter>
              </Stack>
            </Stack>
          </Card>
        </GridItem>
        <GridItem colSpan={2}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "900px" }}
                src={WhiteInterior}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">The perfect Space</Heading>

                  <Text py="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum modi excepturi cupiditate, assumenda aut quae praesentium sit, rerum, voluptatem facilis ad aperiam alias. Cupiditate ratione voluptates, incidunt veniam totam delectus?
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Learn More
                  </Button>
                </CardFooter>
              </Stack>
            </Stack>
          </Card>
        </GridItem>
        <GridItem colSpan={2}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "900px" }}
                src={WhiteInterior}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">The perfect latte</Heading>

                  <Text py="2">
                    Caffè latte is a coffee beverage of Italian origin made with
                    espresso and steamed milk.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Learn More
                  </Button>
                </CardFooter>
              </Stack>
            </Stack>
          </Card>
        </GridItem>
      </Grid>
      <Divider />
    </>
  );
};

export default Inspiration;
