import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (!storedUserData) {
      showToast('User not found. Please sign up first.', 'error');
    } else if (
      storedUserData.email !== formData.email ||
      storedUserData.password !== formData.password
    ) {
      showToast('Incorrect email or password. Please try again.', 'error');
    } else {
      showToast('Login successful!', 'success');
      navigate('/dashboard');
    }
  };

  const showToast = (message, status = 'info') => {
    toast({
        position: 'top',
      title: status === 'error' ? 'Error' : 'Success',
      description: message,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="md">
      <Text fontSize={'2xl'}>Login</Text>
      <form onSubmit={handleSubmit}>
        <FormControl>
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
          Log In
        </Button>
      </form>
      <Box mt={4}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Box>

    </Box>
  );
};

export default Login;
