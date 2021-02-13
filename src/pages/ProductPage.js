import React from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

import plant from '../images/plant.jpg';
import { ArrowForwardIcon } from '@chakra-ui/icons';
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

function ProductInfo() {
  return (
    <Container maxWidth="1200px">
      <Flex h={500} bg="red">
        <Flex bg="blue" overflow="hidden" flex="2" overflow="hidden">
          {/* <Square
            backgroundImage={'url(' + plant + ')'}
            w="100%"
            h="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          /> */}
          <Image src={plant} minWidth="100%" fit="cover" />
        </Flex>

        <Flex bg="yellow" flex="1">
          <Text>Two</Text>
        </Flex>
      </Flex>
    </Container>
  );
}

function ProductPage() {
  return (
    <div>
      <Header />
      <ProductInfo />
      <Footer />
    </div>
  );
}

export default ProductPage;
