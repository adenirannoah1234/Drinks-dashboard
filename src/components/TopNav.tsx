import {
  Box,
  Flex,
  HStack,
  Avatar,
  IconButton,
  Divider,
  Heading,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { GrNotification } from 'react-icons/gr';
import { Download } from 'lucide-react';

import { LuGanttChart } from 'react-icons/lu';
import { useLocation } from 'react-router-dom';
import NewRecordModal from '../pages/transaction-history/components/NewRecordModal';

interface TopNavProps {
  onMenuClick: () => void;
}

const TopNav = ({ onMenuClick }: TopNavProps) => {
  const location = useLocation();
  const isTransactionHistory = location.pathname === '/transaction-history';
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={'#ffffffff'} px={3}>
      <Flex justifyContent={'space-between'} px={{ base: 3, lg: 7 }} py={7}>
        <Flex alignItems="center" gap={4}>
          <IconButton
            display={{ base: 'flex', lg: 'none' }}
            aria-label="Open menu"
            icon={<LuGanttChart size={28} />}
            onClick={onMenuClick}
            bg={'#636363ff'}
            _hover={'#636363ff'}
            color={'#ffffff'}
            rounded={'full'}
            size={'lg'}
          />
          <Heading display={{ base: 'none', lg: 'flex' }}>
            {isTransactionHistory ? 'Transaction History' : 'Overview'}
          </Heading>
        </Flex>

        {isTransactionHistory ? (
          <Flex gap={4}>
            <IconButton
              aria-label="notification"
              bg={'#9e9e9eff'}
              _hover={'#9e9e9eff'}
              color={'#ffffff'}
              rounded={'full'}
              size={'lg'}
              icon={<GrNotification size={28} />}
            />
            <IconButton
              aria-label="download"
              bg={'#9e9e9eff'}
              _hover={'#9e9e9eff'}
              color={'#ffffff'}
              rounded={'full'}
              size={'lg'}
              icon={<Download size={28} />}
            />
            <Button
              rightIcon={<span className="text-xl">+</span>}
              bg="#2D2D2D"
              color="white"
              _hover={{ bg: '#1D1D1D' }}
              rounded="full"
              px={6}
              h="48px"
              onClick={onOpen}
            >
              New Record
            </Button>
          </Flex>
        ) : (
          <HStack justifyContent="flex-end" w="100%" spacing={4}>
            <IconButton
              aria-label="notification"
              bg={'#636363ff'}
              _hover={'#636363ff'}
              color={'#ffffff'}
              rounded={'full'}
              size={'lg'}
              icon={<GrNotification size={28} />}
            />
            <Avatar src="/abbey.png" display={{ base: 'none', lg: 'flex' }} />
          </HStack>
        )}
      </Flex>
      <Divider borderWidth={'1.3px'} borderColor={'black'} opacity={0.2} />
      <NewRecordModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default TopNav;
