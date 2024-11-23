import TransactionTable from './components/Table';
import DashboardHeading from './components/DashboardHeading';
import { Stack } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Stack>
      <DashboardHeading />
      <TransactionTable />
    </Stack>
  );
};

export default Dashboard;
