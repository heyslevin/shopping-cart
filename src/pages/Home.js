import React from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

import plant from '../images/plant.jpg';
import SingleProduct from '../components/ui/SingleProduct';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import {
  Box,
  Flex,
  Button,
  Center,
  Link,
  Text,
  Square,
  Heading,
  Image,
  SimpleGrid,
  Container,
} from '@chakra-ui/react';

function Hero() {
  return (
    <Center>
      <Square
        backgroundImage={'url(' + plant + ')'}
        w="100%"
        h="400px"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Heading size="4xl" color="white">
          We have great prices, I think.
        </Heading>
      </Square>
    </Center>
  );
}

function ProductArea() {
  return (
    <Flex direction="column" p={4} alignItems="center">
      <Flex
        alignItems="baseline"
        justify="space-between"
        w={940}
        borderBottom="1px solid black"
        py={3}
      >
        <Heading size="lg">Our Best Sellers</Heading>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="black"
          variant="outline"
        >
          View All
        </Button>
      </Flex>
      <Flex pt={8} maxW="950px" wrap="wrap" justifyContent="center">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </Flex>
    </Flex>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductArea />
      <Footer />
    </div>
  );
}

export default Home;
