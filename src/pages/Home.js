import React from 'react';
import plant from '../images/plant.jpg';
import SingleProduct from '../components/ui/SingleProduct';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
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
        <Heading size="4xl" color="white">
          We have great prices, I think.
        </Heading>
      </Square>
    </Center>
  );
}

function ProductArea() {
  return (
    <Flex direction="column" p={4} alignItems="center">
      <Flex
        alignItems="baseline"
        justify="space-between"
        w={940}
        borderBottom="1px solid black"
        py={3}
      >
        <Heading size="lg">Our Best Sellers</Heading>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="black"
          variant="outline"
        >
          View All
        </Button>
      </Flex>
      <Flex pt={8} maxW="950px" wrap="wrap" justifyContent="center">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </Flex>
    </Flex>
  );
}

function Footer() {
  return (
    <Flex justify="space-between" bg="black" p={4}>
      <Box py={4} textAlign="left" w="200px" color="white">
        <Text fontSize={20}>General Store</Text>
      </Box>
      <Center color="white" justify="flex-end">
        <Text color="white">Follow Us</Text>
        <Button m={2} ml={10} colorScheme="facebook" leftIcon={<FaFacebook />}>
          Facebook
        </Button>
        <Button m={2} colorScheme="twitter" leftIcon={<FaTwitter />}>
          Twitter
        </Button>
      </Center>
    </Flex>
  );
}

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <ProductArea />
      <Footer />
    </div>
  );
}

export default Home;
