// src/components/Signup.js
import React, {useState} from "react";
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {Alert, AlertIcon, useToast ,Text} from "@chakra-ui/react";
import {   useNavigate } from 'react-router-dom';


const Signup = () => {
    const toast = useToast()
    const navigation = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast({
        position: 'top',
        title: 'Signup Successfull.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 6000,
        isClosable: true,
      })

    // Store user data in local storage
    localStorage.setItem("userData", JSON.stringify(formData));

    navigation("/login")

   
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="md">
        <Text  fontSize={"2xl"}>Signup Here</Text>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Signup
        </Button>

       
       
      </form>
    </Box>
  );
};

export default Signup;
