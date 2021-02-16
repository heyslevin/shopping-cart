import React from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

import shoe from '../images/shoe.jpg';
import { ArrowForwardIcon, StarIcon } from '@chakra-ui/icons';
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
  Stack,
  UnorderedList,
  ListItem,
  Spacer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function ProductInfo() {
  return (
    <Container maxWidth="1200px">
      {/* Size of Container */}
      <Flex h={700} bg="red">
        {/* Product Image */}
        <Flex bg="gray.100" overflow="hidden" flex="2" overflow="hidden">
          <Image src={shoe} minWidth="100%" fit="cover" />
        </Flex>

        {/* Product Info */}
        <Stack
          borderRight="1px"
          borderColor="gray.100"
          p={3}
          w="100%"
          bg="white"
          flex="1"
        >
          {/* Top Info Bar */}
          <Flex justify="space-between">
            <Text>Men</Text>
            <Flex>
              <Flex mt={1} mr={2}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Flex>
              <Text>2 Reviews</Text>
            </Flex>
          </Flex>
          {/* Name & Price */}
          <Flex justify="space-between" alignItems="baseline">
            <Heading pt={3} size="lg">
              The Driggs Slipper
            </Heading>
            <Text>$69</Text>
          </Flex>
          {/* Description */}
          <Stack pt={10}>
            <Heading size="xs">Description</Heading>
            <Text>
              Finally—a sporty, eco-friendly sneaker worth wearing! This knit
              version of our classic Royale model is our most responsible, and
              fastest-selling shoe to date. It is 100% Vegan, made from recycled
              plastic, and (wait for it), machine washable. We teamed up with
              our factory and found a new way to take seven plastic bottles that
              would have wound up in the ocean and transform them into something
              that looks awesome on land. Pretty sweet!
            </Text>
            <Heading pt={10} size="xs">
              Features
            </Heading>
            <UnorderedList mb={10} pl={4} fontSize="md">
              <ListItem>Moisturizes</ListItem>
              <ListItem>Calms inflammation </ListItem>
              <ListItem>Reduces irritation </ListItem>
            </UnorderedList>
            <Flex justify="space-between">
              <NumberInput defaultValue="1">
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button ml={1} w="100%" colorScheme="blackAlpha" bg="black">
                $69 · Add to Cart
              </Button>
            </Flex>
          </Stack>
        </Stack>
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
