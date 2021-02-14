import React from 'react';
import shoe from '../../images/shoe.jpg';

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

function CheckoutItem() {
  return (
    <div>
      <Flex my={10} py={3} borderY="1px" w="100%" justify="space-between">
        {/* Product Image */}
        <Flex>
          <Box
            border="1px"
            borderRadius="5px"
            overflow="hidden"
            borderColor="gray.400"
          >
            <Image boxSize="100px" src={shoe}></Image>
          </Box>
          <Stack pl={3} justify="center">
            <Text>The Shoe</Text>
            <Text>Medium</Text>
          </Stack>
        </Flex>

        <Flex align="center">
          <Text>$59</Text>
        </Flex>
      </Flex>
    </div>
  );
}

export default CheckoutItem;
