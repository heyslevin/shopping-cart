import React from 'react';
import { Box, Image, Badge, Text, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import shoe from '../../images/shoe.jpg';

function SingleProduct(props) {
  const {
    name,
    color,
    price,
    quantity,
    description,
    features,
    image,
  } = props.data;
  return (
    <Box
      as={RouterLink}
      to="/product"
      onClick={() => props.setCurrentProduct(props.data)}
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
        <Image src={image}></Image>
      </Box>
      <Flex alignItems="baseline" justify="space-between">
        <Box>
          <Text fontWeight="bold" mt={1}></Text>
          <p>{name}</p>
          <Text fontStyle="italic">{color}</Text>
        </Box>
        <Box>
          <Text>${price}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default SingleProduct;
