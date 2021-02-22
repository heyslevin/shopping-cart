import React from 'react';
import CheckoutTable from '../components/sections/CheckoutTable.js';

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
} from '@chakra-ui/react';

function Checkout(props) {
  return (
    <div>
      <Container maxWidth="1200px">
        <Heading size="xl" pt={10}>
          My Shopping Cart
        </Heading>
        <CheckoutTable cart={props.cart} setCart={props.setCart} />
      </Container>
    </div>
  );
}

export default Checkout;
