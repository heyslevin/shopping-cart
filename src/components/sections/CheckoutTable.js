import React from 'react';
import shoe from '../../images/shoe.jpg';
import { DeleteIcon } from '@chakra-ui/icons';

import {
  Box,
  Flex,
  Grid,
  Button,
  Center,
  Link,
  Text,
  Spacer,
  Square,
  Heading,
  Image,
  SimpleGrid,
  Container,
  Stack,
  HStack,
  UnorderedList,
  ListItem,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useProps,
} from '@chakra-ui/react';

function HeaderCheckout(props) {
  if (props.cart.length !== 0) {
    return (
      <Flex
        mt={2}
        py={3}
        borderBottom="1px"
        borderColor="gray.300"
        w="100%"
        justify="space-between"
      >
        <Flex flex="3">Description</Flex>

        <Flex flex="2" align="center">
          <Center>
            <Text>Quantity</Text>
          </Center>
        </Flex>
        <Flex flex="1" align="center">
          <Text>Price</Text>
        </Flex>
      </Flex>
    );
  } else {
    return <Heading>is currently empty.</Heading>;
  }
}

function ProductTable(props) {
  const { cart, handleDeleteProduct, handleAddToCart } = props;

  function updateQuantity(quantity, index) {
    handleAddToCart(props.cart[index], quantity);
  }

  let rows;

  if (cart.length > 0) {
    rows = cart.map((product, index) => {
      return (
        <ProductRow
          updateQuantity={updateQuantity}
          handleDeleteProduct={handleDeleteProduct}
          cart={cart}
          product={product}
          key={index}
          index={index}
        />
      );
    });
  }

  return (
    <Stack mb={10} w="100%" justify="space-between">
      {rows}
    </Stack>
  );
}

function ProductRow(props) {
  const {
    name,
    color,
    price,
    quantity,
    description,
    features,
    image,
  } = props.product;

  const { handleDeleteProduct } = props;

  return (
    <Flex w="100%" py={5} borderBottom="1px" borderColor="gray.300">
      <Flex flex="3">
        <Box
          border="1px"
          borderRadius="5px"
          overflow="hidden"
          borderColor="gray.400"
        >
          <Image boxSize="100px" src={image}></Image>
        </Box>
        <Stack pl={3} justify="center">
          <Text>{name}</Text>
          <Text color="gray.500">{color}</Text>
        </Stack>
      </Flex>

      <Flex flex="1" align="center">
        <NumberInput
          defaultValue={quantity}
          onChange={quantity => props.updateQuantity(quantity, props.index)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <Flex flex="1" justifyContent="center">
        <Center>
          <Center
            as="button"
            onClick={() => handleDeleteProduct(props.product)}
            _hover={{ background: 'gray.300', color: 'gray.500' }}
            w="40px"
            h="40px"
            color="gray.300"
            border="1px"
          >
            <DeleteIcon />
          </Center>
        </Center>
      </Flex>
      <Flex flex="1" align="center">
        <Text>${price}</Text>
      </Flex>
    </Flex>
  );
}

function CheckoutTotal(props) {
  if (props.cart.length > 0) {
    let prices = props.cart.map(product => product.price * product.quantity);
    let total = prices.reduce((acc, cur) => acc + cur);
    return (
      <Flex
        mt={2}
        pt={3}
        pb={10}
        borderBottom="1px"
        borderColor="gray.300"
        w="100%"
        justify="space-between"
      >
        <Spacer flex="3" />
        <Flex flex="2" align="center">
          <Text>Total</Text>
        </Flex>

        <Flex flex="1" align="center">
          <HStack>
            <Flex alignItems="baseline">
              <Text fontSize="4xl">${total}</Text>
              <Text pl={2}>USD</Text>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
    );
  } else {
    return null;
  }
}

function CheckoutTable(props) {
  return (
    <div>
      <HeaderCheckout cart={props.cart} />
      <ProductTable
        handleAddToCart={props.handleAddToCart}
        handleDeleteProduct={props.handleDeleteProduct}
        cart={props.cart}
      ></ProductTable>
      <CheckoutTotal cart={props.cart} />
    </div>
  );
}

export default CheckoutTable;
