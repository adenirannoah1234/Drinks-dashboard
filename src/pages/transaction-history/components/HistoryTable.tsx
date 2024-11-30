import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { FaFilter } from 'react-icons/fa6';
import TransactionStatus from '../../Dashboard/components/status';

type Transaction = {
  _id: string;
  userName: string;
  totalAmount: number;
  totalAmountPaid: number;
  paymentMethod: string;
  status: string;
  date: string;
};

const TransactionTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/transactions/');
        const data = await response.json();

        if (data.success) {
          setTransactions(data.transactions);
        } else {
          console.error('Error fetching transactions:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <Box w="full" overflow="hidden" rounded="lg">
      <Box overflowX="auto">
        <Table>
          <Thead bg="#2b2b2bff">
            <Tr>
              <Th color="white" py={4} whiteSpace="nowrap">
                Status
              </Th>
              <Th color="white" whiteSpace="nowrap">
               Date/ Time
              </Th>
              <Th color="white" whiteSpace="nowrap">
                Invoice ID
              </Th>
              <Th color="white" whiteSpace="nowrap">
                Customer Name
              </Th>
              <Th color="white" whiteSpace="nowrap">
                Payment Method
              </Th>
              <Th color="white" whiteSpace="nowrap">
                Amount
              </Th>
              <Th color="white" alignSelf="center">
                <FaFilter size={20} />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading ? (
              <Tr>
                <Td colSpan={7} textAlign="center">
                  Loading...
                </Td>
              </Tr>
            ) : (
              transactions.map((transaction) => (
                <Tr key={transaction._id}>
                  <Td
  fontWeight={400}
  fontSize="1.1rem"
  whiteSpace="nowrap"
  color={
    transaction.status === "Pending"
      ? "orange.500" // Chakra UI color for orange
      : transaction.status === "Approved"
      ? "green.500" // Chakra UI color for green
      : "gray.500"  // Default color for other statuses
  }
>
  {transaction.status}
</Td>


                  <Td fontWeight={400} fontSize="1.1rem" whiteSpace="nowrap">
                    {new Date(transaction.date).toLocaleString()}
                  </Td>
                  <Td fontWeight={400} fontSize="1.1rem" whiteSpace="nowrap">
  {transaction._id.slice(-5)}
</Td>           <Td fontWeight={400} fontSize="1.1rem" whiteSpace="nowrap">
                    {transaction.userName}
                  </Td>
                  <Td fontWeight={400} fontSize="1.1rem" whiteSpace="nowrap">
                    {transaction.paymentMethod}
                  </Td>
                  <Td fontWeight={400} fontSize="1.1rem" whiteSpace="nowrap">
                    ₦{transaction.totalAmount}
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
                      View
                    </Button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default TransactionTable;
