import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import logo from '../../images/logo.svg';

import {
  Box,
  Badge,
  Flex,
  Button,
  Center,
  Link,
  Text,
  Icon,
  Image,
} from '@chakra-ui/react';

function Navigation(props) {
  //Calculate Total
  let quantityArray = props.cart.map(item => item.quantity);
  let totalInCart = 0;

  if (quantityArray.length !== 0) {
    totalInCart = quantityArray.reduce((acc, current) => acc + current);
  }

  return (
    <Flex justify="space-between" bg="white" p={4}>
      <Box py={4} textAlign="left" w="200px" color="white">
        <Link _focus={{ outline: 'none' }} as={RouterLink} to="/" fontSize={32}>
          <Image src={logo} />
        </Link>
      </Box>
      <Center color="black" justify="flex-end">
        <Link as={RouterLink} p={4} to="/shopAll">
          Shop All
        </Link>
        <Link p={4}>Our Story</Link>
        <Link p={4}>Contact</Link>
        <Link p={4}>FAQs</Link>
        <Button
          ml={3}
          as={RouterLink}
          to="/checkout"
          border="1px"
          borderColor="white"
          bg="black"
          _hover={{
            background: 'gray.600',
          }}
        >
          <Icon as={BiCart} color="white" w={5} h={5} mr={3} />
          <Badge>{totalInCart}</Badge>
        </Button>
      </Center>
    </Flex>
  );
}

export default Navigation;
