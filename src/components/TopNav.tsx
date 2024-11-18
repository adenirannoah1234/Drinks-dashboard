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

const TopNav = () => {
  return (
    <Box bg={'#ffffffff'} px={3}>
      <Flex justifyContent={'space-between'} px={7} py={7}>
        <Heading>Overview</Heading>
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
          <Avatar src="/abbey.png" />
        </HStack>
      </Flex>
      <Divider border={'0.1em solid black'} />
    </Box>
  );
};

export default TopNav;
