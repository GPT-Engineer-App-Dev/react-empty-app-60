import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, VStack, Heading, Text, Button } from '@chakra-ui/react';
import { FaRocket } from 'react-icons/fa';

const Index = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate('/login');
    }
  }, [session, navigate]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
        <Text fontSize="lg">This is your starting point. Customize it as you wish!</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;