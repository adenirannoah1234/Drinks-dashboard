import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
//   import TransactionStatus from '../../Dashboard/components/status';
import { DailyData } from './data';
import { FaFilter } from 'react-icons/fa6';
//   type StatusType = 'Sold Goods' | 'Pend Goods';
const TransactionTable = () => {
  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case 'Sold Goods':
  //       return '#10B981';
  //     case 'Rejected':
  //     case 'Returned':
  //       return '#EF4444';
  //     default:
  //       return '#71717A';
  //   }
  // };

  return (
    <Box
      w="full"
      overflow="hidden"
      rounded="lg"
      // border="1px"
      // borderColor="gray.200"
    >
      {/* <Flex justify="space-between" align="center" p={4}>
          <Heading size="md">Recent Transactions</Heading>
          <Button
            bg="#3d3d3dff"
            color="white"
            _hover={{ bg: '#3d3d3dff' }}
            rounded="full"
            px={6}
          >
            See all
          </Button>
        </Flex> */}

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
                Total At Amount
              </Th>
              <Th color="white" alignSelf={'center'}>
                <FaFilter size={20} />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {DailyData.map((row) => (
              <Tr key={row.id}>
                <Td fontWeight={400} fontSize={'1.1rem'} whiteSpace={'nowrap'}>
                  {row.date}
                </Td>

                <Td fontWeight={400} fontSize={'1.1rem'} whiteSpace={'nowrap'}>
                  {row.totalTransaction}
                </Td>
                <Td fontWeight={400} fontSize={'1.1rem'} whiteSpace={'nowrap'}>
                  {row.totalAtHand}
                </Td>

                <Td fontWeight={400} fontSize={'1.1rem'} whiteSpace={'nowrap'}>
                  {row.totalAtAmount}
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
