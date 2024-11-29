import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { IoCallOutline } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';

const Invoice = () => {
  return (
    <Box
      mx="auto"
      mt={10}
      p={6}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
    >
      <Flex justify="space-between" mb={4}>
        <Stack spacing={'5'}>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            Logo
          </Text>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            Company's Name
          </Text>
        </Stack>
        <Stack spacing={'5'}>
          <Text fontSize={'2rem'} fontWeight={'600'}>
            INVOICE
          </Text>
          <Box>
            <Text fontWeight={'500'} fontSize={'1.5rem'}>
              Date Information
            </Text>
            <Text fontWeight={'500'} fontSize={'1.5rem'}>
              01/04/24
            </Text>
          </Box>
          <Box>
            <Text fontWeight={'500'} fontSize={'1.5rem'}>
              Transaction Time
            </Text>
            <Text fontWeight={'500'} fontSize={'1.5rem'}>
              12:30pm
            </Text>
          </Box>
        </Stack>
      </Flex>

      <Box overflowX="auto">
        <Table>
          <Thead bg="#2b2b2bff">
            <Tr>
              <Th color="white" py={4} whiteSpace={'nowrap'}>
                Customer's Name
              </Th>
              <Th color="white" whiteSpace={'nowrap'}>
                Product Name
              </Th>
              <Th color="white" whiteSpace={'nowrap'}>
                Product Id
              </Th>
              <Th color="white" whiteSpace={'nowrap'}>
                Quantity
              </Th>

              <Th color="white" whiteSpace={'nowrap'}>
                Amount
              </Th>
              <Th color="white" alignSelf={'center'}>
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight={400} fontSize={'0.9375rem'} whiteSpace={'nowrap'}>
                Abbey Thompson
              </Td>
              <Td fontWeight={400} fontSize={'0.9375rem'} whiteSpace={'nowrap'}>
                Chivita
              </Td>

              <Td fontWeight={400} fontSize={'0.9375rem'} whiteSpace={'nowrap'}>
                13A57B80
              </Td>
              <Td fontWeight={400} fontSize={'0.9375rem'} whiteSpace={'nowrap'}>
                10 Cartons
              </Td>

              <Td fontWeight={400} fontSize={'0.9375rem'} whiteSpace={'nowrap'}>
                #50,000.00
              </Td>
              <Td>
                <Button
                  bg="#00a862ff"
                  color="white"
                  size="sm"
                  px={6}
                  _hover={{ bg: '#00a862ff' }}
                  rounded="md"
                >
                  Success
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Flex justify="space-between" mt={4}>
        <Box>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            Payment Method
          </Text>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            Transfer
          </Text>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            Amount cash
          </Text>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            $ 0
          </Text>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            Amount sent to account
          </Text>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            50,000
          </Text>
        </Box>
        <Flex mr={'140px'}>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            Total:
          </Text>
          <Text fontWeight={'500'} fontSize={'1.5rem'}>
            # 50,000.00
          </Text>
        </Flex>
      </Flex>

      <Box
        mt={4}
        w="full"
        display="flex"
        justifyContent="flex-end"
        fontSize="sm"
      >
        <Flex direction="column" align="flex-start" gap={1}>
          <Text fontSize="1.5rem" fontWeight={'600'}>
            Thank You for your patronage.
          </Text>
          <Flex align="center" gap={2}>
            <Icon as={CiMail} boxSize={7} mt={1} />
            <Text fontSize={'1.5rem'} fontWeight={'400'}>
              chimelu@gmail.com
            </Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={IoCallOutline} boxSize={6} />
            <Text fontSize={'1.5rem'} fontWeight={'400'}>
              0906362892
            </Text>
          </Flex>{' '}
        </Flex>
      </Box>
    </Box>
  );
};

export default Invoice;
