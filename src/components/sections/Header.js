import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Flex, Button, Center, Link, Text } from '@chakra-ui/react';

function Navigation() {
  return (
    <Flex justify="space-between" bg="black" p={4}>
      <Box py={4} textAlign="left" w="200px" color="white">
        <Link as={RouterLink} to="/" fontSize={32}>
          Albino
        </Link>
      </Box>
      <Center color="white" justify="flex-end">
        <Link as={RouterLink} p={4} to="/product">
          Our Story
        </Link>
        <Link p={4}>Contact</Link>
        <Link p={4}>FAQs</Link>
        <Button bg="purple">My Cart</Button>
      </Center>
    </Flex>
  );
}

export default Navigation;
