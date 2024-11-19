import {
  Box,
  Flex,
  Text,
  Stack,
  Avatar,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { SIDEBAR_LINKS } from '../constants/SidbarLinks';
import { AiOutlineLogout } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  return (
    <Box
      bg="#292929ff"
      color="white"
      p={6}
      borderRight="1px solid gray.700"
      h="100vh"
      zIndex={999}
      position={{ base: 'fixed', lg: 'static' }}
      width={{ base: '240px', lg: 'auto' }}
      display={{ base: isOpen ? 'block' : 'none', lg: 'block' }}
      left={0}
      top={0}
      transform={{
        base: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        lg: 'none',
      }}
      transition="transform 0.3s ease-in-out"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '8px',
          backgroundColor: '#292929ff',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '8px',
          backgroundColor: '#555',
        },
      }}
    >
      <IconButton
        aria-label="Close menu"
        icon={<RxCross1 size={24} />}
        size="md"
        variant="ghost"
        position="absolute"
        right={2}
        top={2}
        display={{ base: 'flex', lg: 'none' }}
        color="white"
        _hover={{ bg: 'gray.700' }}
        onClick={onClose}
      />
      <Stack alignItems="center" mb={6} mt={{ base: 8, lg: 0 }}>
        <Avatar src="/abbey.png" size="xl" />
        <Text fontSize="xl" fontWeight="bold">
          Abbey Tompson
        </Text>
      </Stack>
      <Stack spacing={6} mt={6}>
        {SIDEBAR_LINKS?.map((link) => (
          <RouterLink
            to={link.path}
            key={link.id}
            style={{ textDecoration: 'none' }}
          >
            <Flex
              alignItems="center"
              gap={2}
              bg={location.pathname === link.path ? 'gray.700' : 'transparent'}
              color={location.pathname === link.path ? 'white' : '#d4d4d4ff'}
              p={2}
              borderRadius="md"
              _hover={{ bg: 'gray.700', color: 'white' }}
            >
              <link.icon size={20} color="#d4d4d4ff" />
              <Text color={'#d4d4d4ff'}>{link.label}</Text>
            </Flex>
          </RouterLink>
        ))}
      </Stack>
      <Flex mt={10} gap={2} alignItems="center">
        <Icon as={AiOutlineLogout} color="white" w={6} h={5} mt={1} />
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          Logout
        </RouterLink>
      </Flex>
    </Box>
  );
};

export default Sidebar;
