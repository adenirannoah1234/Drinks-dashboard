import {
  Box,
  Flex,
  HStack,
  Avatar,
  IconButton,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { GrNotification } from 'react-icons/gr';

import { LuGanttChart } from 'react-icons/lu';

interface TopNavProps {
  onMenuClick: () => void;
}

const TopNav = ({ onMenuClick }: TopNavProps) => {
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
          <Heading display={{ base: 'none', lg: 'flex' }}>Overview</Heading>
        </Flex>
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
      </Flex>
      <Divider borderWidth={'1.3px'} borderColor={'black'} opacity={0.2} />
    </Box>
  );
};

export default TopNav;
