import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { useState } from 'react';

const RootLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Flex h="100vh" direction="row" backgroundColor="#f9f9f9" overflow="hidden">
      <Box as="nav" flexShrink={0} height="100%">
        <Sidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </Box>

      <Flex direction="column" flex="1" minWidth={0} height="100%">
        <Box as="header" flexShrink={0}>
          <TopNav onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </Box>
        {isMobileMenuOpen && (
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.600"
            display={{ base: 'block', lg: 'none' }}
            onClick={() => setIsMobileMenuOpen(false)}
            zIndex={998}
          />
        )}
        <Box
          as="main"
          flex="1"
          overflowY="auto"
          bg="#e8e8e3ff"
          p={4}
          minWidth={0}
          sx={{
            '&::-webkit-scrollbar': {
              width: '8px',
              backgroundColor: '#f5f5f5',
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '8px',
              backgroundColor: '#888',
            },

            '& > *': {
              maxWidth: '100%',
              width: '100%',
            },
          }}
        >
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default RootLayout;
