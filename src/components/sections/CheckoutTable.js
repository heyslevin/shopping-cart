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
} from '@chakra-ui/react';

function HeaderCheckout() {
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
}

function ProductTable(props) {
  return (
    <Stack mb={10} w="100%" justify="space-between">
      {props.children}
    </Stack>
  );
}

function ProductRow() {
  return (
    <Flex w="100%" py={5} borderBottom="1px" borderColor="gray.300">
      <Flex flex="3">
        <Box
          border="1px"
          borderRadius="5px"
          overflow="hidden"
          borderColor="gray.400"
        >
          <Image boxSize="100px" src={shoe}></Image>
        </Box>
        <Stack pl={3} justify="center">
          <Text>The Shoe</Text>
          <Text color="gray.500">Medium</Text>
        </Stack>
      </Flex>

      <Flex flex="1" align="center">
        <NumberInput defaultValue="1">
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
        <Text>$59</Text>
      </Flex>
    </Flex>
  );
}

function CheckoutItem() {
  return (
    <div>
      <HeaderCheckout />
      <ProductTable>
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
      </ProductTable>
    </div>
  );
}

export default CheckoutItem;
