import React from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

import hero2 from '../images/hero2.jpg';
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
    <Flex h={500} justifyContent="center" overflow="hidden" position="relative">
      <Heading
        size="4xl"
        color="white"
        position="absolute"
        alignSelf="center"
        zIndex="1"
      >
        Work from home in style
      </Heading>
      <Flex w="100%" h="100%" bg="black" position="absolute" opacity=".4" />
      <Image minWidth="100%" fit="cover" src={hero2} />
    </Flex>
  );
}

function ProductArea(props) {
  return (
    <Flex direction="column" p={4} alignItems="center">
      <Flex
        alignItems="baseline"
        justify="space-between"
        w={940}
        borderBottom="1px solid black"
        py={3}
      >
        <Heading size="lg">All Products</Heading>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="black"
          variant="outline"
        >
          View All
        </Button>
      </Flex>
      <Flex pt={8} maxW="950px" wrap="wrap" justifyContent="center">
        <SingleProduct
          data={props.data[0]}
          setCurrentProduct={props.setCurrentProduct}
        />
        <SingleProduct
          data={props.data[1]}
          setCurrentProduct={props.setCurrentProduct}
        />
        <SingleProduct
          data={props.data[2]}
          setCurrentProduct={props.setCurrentProduct}
        />
        <SingleProduct
          data={props.data[3]}
          setCurrentProduct={props.setCurrentProduct}
        />
        <SingleProduct
          data={props.data[4]}
          setCurrentProduct={props.setCurrentProduct}
        />
        <SingleProduct
          data={props.data[5]}
          setCurrentProduct={props.setCurrentProduct}
        />
      </Flex>
    </Flex>
  );
}

function AllProducts(props) {
  return (
    <div>
      <Header />
      <ProductArea
        data={props.data}
        setCurrentProduct={props.setCurrentProduct}
      />
      <Footer />
    </div>
  );
}

export default AllProducts;
