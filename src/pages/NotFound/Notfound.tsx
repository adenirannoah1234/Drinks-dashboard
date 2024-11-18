import {
  Heading,
  Text,
  VStack,
  Container,
  Button,
  Icon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const NotFound = () => {
  return (
    <Container maxW="100vw" h="100vh" bg="gray.50">
      <VStack justify="center" align="center" h="full" spacing={6}>
        <Heading size="4xl" color="gray.800" fontWeight="bold">
          404
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Oops! The page you're looking for doesn't exist.
        </Text>
        <Button
          as={RouterLink}
          to="/"
          colorScheme="blue"
          leftIcon={<Icon as={HomeIcon} />}
          size="lg"
        >
          Return Home
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFound;
