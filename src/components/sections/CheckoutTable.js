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
  Square,
  Heading,
  Image,
  SimpleGrid,
  Container,
  Stack,
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
  const { cart } = props;
  let rows;

  if (cart.length > 0) {
    rows = cart.map((product, index) => {
      console.log(product);
      return <ProductRow product={product} key={index} />;
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
        <NumberInput defaultValue={quantity}>
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

function CheckoutItem(props) {
  return (
    <div>
      <HeaderCheckout cart={props.cart} />
      <ProductTable cart={props.cart}></ProductTable>
    </div>
  );
}

export default CheckoutItem;
