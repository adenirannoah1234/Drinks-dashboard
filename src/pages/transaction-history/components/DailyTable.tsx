import { useState, useEffect } from 'react';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FaFilter } from 'react-icons/fa6';

const TransactionTable = () => {
  // State to hold the fetched data
  const [dailyData, setDailyData] = useState<any[]>([]);

  // Fetch daily transaction data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/daily-transactions');
        const data = await response.json();
        if (data.success) {
          setDailyData(data.data); // Set the data if the request is successful
        }
      } catch (error) {
        console.error('Error fetching daily transaction data:', error);
      }
    };

    fetchData(); // Call the fetch function on component mount
  }, []);

  return (
    <Box w="full" overflow="hidden" rounded="lg">
      <Box overflowX="auto">
        <Table>
          <Thead bg="#2b2b2bff">
            <Tr>
              <Th color="white" whiteSpace={'nowrap'}>
                Date
              </Th>
              <Th color="white" whiteSpace={'nowrap'}>
                Total Transaction
              </Th>
              <Th color="white" whiteSpace={'nowrap'}>
                Total At Hand
              </Th>
              <Th color="white" whiteSpace={'nowrap'}>
                Total Amount
              </Th>
              <Th color="white" alignSelf={'center'}>
                <FaFilter size={20} />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dailyData.map((row) => (
              <Tr key={row._id}>
                <Td fontWeight={400} fontSize={'1.1rem'} whiteSpace={'nowrap'}>
                  {new Date(row.date).toLocaleDateString()} {/* Format date */}
                </Td>
                <Td fontWeight={400} fontSize={'1.1rem'} whiteSpace={'nowrap'}>
                  {row.totalTransactions}
                </Td>
                <Td fontWeight={400} fontSize={'1.1rem'} whiteSpace={'nowrap'}>
                  {row.totalCashAtHand}
                </Td>
                <Td fontWeight={400} fontSize={'1.1rem'} whiteSpace={'nowrap'}>
                  {row.totalAmount}
                </Td>
                <Td>
                  <Button
                    bg="#00a862ff"
                    color="white"
                    size="sm"
                    px={6}
                    _hover={{ bg: '#00a862ff' }}
                    textAlign={'center'}
                    rounded="md"
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default TransactionTable;
