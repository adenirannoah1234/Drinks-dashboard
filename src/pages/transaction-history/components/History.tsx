// import { useEffect } from "react";
import { Stack } from '@chakra-ui/react';
import TransactionData from './TransactionData';
import TransactionTable from './HistoryTable';

const History = () => {
  return (
    <Stack>
      <TransactionData />
      <TransactionTable />
    </Stack>
  );
};

export default History;
