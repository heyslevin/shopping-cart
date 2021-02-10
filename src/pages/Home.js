import React from 'react';
import plant from '../images/plant.jpg';
import {
  Box,
  Flex,
  Button,
  Center,
  Link,
  Text,
  Square,
  Image,
} from '@chakra-ui/react';

function Navigation() {
  return (
    <Flex justify="space-between" bg="black" p={4}>
      <Box py={4} textAlign="left" w="200px" color="white">
        <Text fontSize={32}>General Store</Text>
      </Box>
      <Center color="white" justify="flex-end">
        <Link p={4}>Our Story</Link>
        <Link p={4}>Contact</Link>
        <Link p={4}>FAQs</Link>
        <Button bg="purple">My Cart</Button>
      </Center>
    </Flex>
  );
}

function Hero() {
  return (
    <Center>
      <Square
        backgroundImage={'url(' + plant + ')'}
        w="100%"
        h="400px"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Text fontSize="3em" color="white">
          We have great prices
        </Text>
      </Square>
    </Center>
  );
}

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  );
}

export default Home;
