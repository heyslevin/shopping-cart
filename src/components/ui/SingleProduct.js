import React from 'react';
import { Box, Image, Badge, Text, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import shoe from '../../images/shoe.jpg';

function SingleProduct(props) {
  return (
    <Box
      as={RouterLink}
      to="/product"
      m={2}
      p={5}
      w="300px"
      borderWidth="1px"
      borderRadius="lg"
      bg="#f7f7f7"
      className="productBox"
      _hover={{ borderColor: 'darkgray' }}
      transition="all .5s ease"
    >
      <Box overflow="hidden" h="200px">
        <Badge
          display="block"
          position="absolute"
          borderRadius="full"
          px="2"
          colorScheme="red"
        >
          New
        </Badge>
        <Image src={shoe}></Image>
      </Box>
      <Flex alignItems="baseline" justify="space-between">
        <Box>
          <Text fontWeight="bold" mt={1}>
            Paper Box
          </Text>
          <Text fontStyle="italic">Jet Black</Text>
        </Box>
        <Box>
          <Text>$30</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default SingleProduct;
