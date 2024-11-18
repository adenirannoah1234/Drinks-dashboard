import { Box, Flex, Text, Stack, Link, Avatar, Icon } from '@chakra-ui/react';
import { SIDEBAR_LINKS } from '../constants/SidbarLinks';
import { AiOutlineLogout } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <Box
      bg="#292929ff"
      color="white"
      p={6}
      borderRight="1px solid gray.700"
      h="100vh"
      zIndex={999}
    >
      <Stack alignItems="center" mb={6}>
        <Avatar src="/abbey.png" size="xl" />
        <Text fontSize="xl" fontWeight="bold">
          Abbey Tompson
        </Text>
      </Stack>
      <Stack spacing={6} mt={6}>
        {SIDEBAR_LINKS?.map((link) => (
          <Link
            href={link.path}
            key={link.id}
            display="flex"
            alignItems="center"
            gap={2}
            textDecoration={'none'}
            _hover={{ textDecoration: 'none' }}
          >
            <link.icon size={20} color="#d4d4d4ff" />
            <Text color={'#d4d4d4ff'}>{link.label}</Text>
          </Link>
        ))}
      </Stack>
      <Flex mt={10} gap={2} alignItems="center">
        <Icon as={AiOutlineLogout} color="white" w={6} h={5} mt={1} />
        <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
          Logout
        </Link>
      </Flex>
    </Box>
  );
};

export default Sidebar;
