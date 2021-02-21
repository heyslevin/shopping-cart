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

function Checkout() {
  return (
    <div>
      <Container maxWidth="1200px">
        <Heading size="xl" pt={10}>
          My Shopping Cart
        </Heading>
        <CheckoutTable />
      </Container>
    </div>
  );
}

export default Checkout;
