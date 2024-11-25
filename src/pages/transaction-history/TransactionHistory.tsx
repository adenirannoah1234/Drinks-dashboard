import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import History from './components/History';
import DailyTable from './components/DailyTable';

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = React.useState('history');

  const tabs = [
    {
      id: 'history',
      label: 'History',
      content: (
        <Box p={6} mt={10}>
          <History />
        </Box>
      ),
    },
    {
      id: 'daily',
      label: 'Daily Transaction',
      content: (
        <Box p={6} mt={10}>
          <DailyTable />
        </Box>
      ),
    },
  ];

  return (
    <Box>
      {/* Tabs Header */}
      <Flex w="full">
        {tabs.map((tab) => (
          <Flex
            key={tab.id}
            flex={1}
            justify="center"
            align="center"
            position="relative"
            cursor="pointer"
            onClick={() => setActiveTab(tab.id)}
            py={4}
          >
            <Text
              fontWeight={activeTab === tab.id ? '600' : 'normal'}
              color={activeTab === tab.id ? 'gray.800' : 'gray.500'}
              fontSize={{ base: '1rem', md: '2rem' }}
            >
              {tab.label}
            </Text>

            {activeTab === tab.id && (
              <Flex
                position="absolute"
                bottom="0"
                left="50%"
                transform="translateX(-50%)"
                w="80%"
                alignItems="center"
                justify="center"
              >
                <Box w="8px" h="8px" borderRadius="full" bg="gray.800" />

                <Box flex={1} h="2px" bg="gray.800" />

                <Box w="8px" h="8px" borderRadius="full" bg="gray.800" />
              </Flex>
            )}
          </Flex>
        ))}
      </Flex>

      {tabs.find((tab) => tab.id === activeTab)?.content}
    </Box>
  );
};
export default TransactionHistory;
