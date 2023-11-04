import React from "react";
import {Link} from "react-router-dom";
import {Box, Heading, VStack, Text, Button} from "@chakra-ui/react";

const Home = () => {
  return (
    <VStack spacing={6} align="center">
      <Heading as="h1">Welcome to Your Car Dealership</Heading>
      <Text fontSize="xl">
        Explore our second-hand cars and specifications.
      </Text>
      <Box>
        <Link to="/login">
          <Button colorScheme="teal" mr={2}>
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="blue">Signup</Button>
        </Link>
      </Box>
    </VStack>
  );
};

export default Home;
