import React from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
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
      <Header />
      <Container maxWidth="1200px">
        <Heading size="xl" pt={10}>
          My Shopping Cart
        </Heading>
        <CheckoutTable />
      </Container>
      <Footer />
    </div>
  );
}

export default Checkout;
