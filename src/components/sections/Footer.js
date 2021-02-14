import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Box, Flex, Button, Center, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex justify="space-between" bg="black" p={4}>
      <Box py={4} textAlign="left" w="200px" color="white">
        <Text fontSize={20}>Albino</Text>
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

export default Footer;
