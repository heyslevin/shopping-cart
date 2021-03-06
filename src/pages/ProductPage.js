import React, { useState } from 'react';
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

function FeaturesList(props) {
  const listItems = props.features.map((feature, index) => {
    return <ListItem key={index}>{feature}</ListItem>;
  });

  return listItems;
}

function ProductInfo(props) {
  const {
    name,
    color,
    price,
    quantity,
    description,
    features,
    image,
  } = props.currentProduct;

  const [inputQuantity, setInputQuantity] = useState(1);

  return (
    <Container maxWidth="1200px">
      {/* Size of Container */}
      <Flex h={700} bg="red">
        {/* Product Image */}
        <Flex bg="gray.100" overflow="hidden" flex="2" overflow="hidden">
          <Image src={image} minWidth="100%" fit="cover" />
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
              {name}
            </Heading>
            <Text>${price}</Text>
          </Flex>
          {/* Description */}
          <Stack pt={10}>
            <Heading size="xs">Description</Heading>
            <Text>{description}</Text>
            <Heading pt={10} size="xs">
              Features
            </Heading>
            <UnorderedList mb={10} pl={4} fontSize="md">
              <FeaturesList features={features} />
            </UnorderedList>
            <Flex justify="space-between">
              <NumberInput
                defaultValue={1}
                onChange={value => setInputQuantity(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                onClick={() =>
                  props.handleAddToCart(props.currentProduct, inputQuantity)
                }
                ml={1}
                w="100%"
                colorScheme="blackAlpha"
                bg="black"
              >
                ${price} · Add to Cart
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Container>
  );
}

function ProductPage(props) {
  return (
    <div>
      <ProductInfo
        handleAddToCart={props.handleAddToCart}
        currentProduct={props.currentProduct}
      />
    </div>
  );
}

export default ProductPage;
