import React from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import CheckoutItem from '../components/ui/CheckoutItem';

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
        <Heading size="xl">Checkout Page</Heading>
        <CheckoutItem />
      </Container>
      <Footer />
    </div>
  );
}

export default Checkout;
