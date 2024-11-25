import { Stack, Text, Box, GridItem, Grid, Divider } from '@chakra-ui/react';
// import CardComponent from '../../Dashboard/components/Card';
import { MoneyData } from '../../Dashboard/components/data';

const TransactionData = () => {
  return (
    <Stack>
      <Grid
        templateColumns={{
          base: '1fr',
          lg: 'repeat(3, 1fr)',
        }}
        gap={{ base: 2, lg: 6 }}
        px={{ base: 2, lg: 16 }}
        py={5}
        position="relative"
      >
        {/* First Item */}
        <GridItem position="relative">
          {/* Mobile view */}
          <Box
            display={{ base: 'block', lg: 'none' }}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={4}
          >
            <Box textAlign="center">
              <Text color={'#8a8a8aff'} fontWeight={'600'} fontSize={'1.25rem'}>
                {MoneyData[0].name}
              </Text>
              <Text color={'#3d3d3dff'} fontWeight={'600'} fontSize={'2.25rem'}>
                ₦{MoneyData[0].value}
              </Text>
            </Box>
          </Box>

          {/* Desktop view */}
          <Box display={{ base: 'none', lg: 'block' }}>
            <Text color={'#8a8a8aff'} fontWeight={'600'} fontSize={'1.25rem'}>
              {MoneyData[0].name}
            </Text>
            <Text color={'#3d3d3dff'} fontWeight={'600'} fontSize={'2.25rem'}>
              ₦{MoneyData[0].value}
            </Text>
          </Box>

          {/* First Divider - Desktop only */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            height="80px"
            zIndex={1}
          >
            <Divider
              orientation="vertical"
              height="100%"
              borderWidth="1px"
              borderColor="black"
            />
          </Box>
        </GridItem>

        {/* Second Item */}
        <GridItem position="relative">
          {/* Mobile view */}
          <Box
            display={{ base: 'block', lg: 'none' }}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={4}
          >
            <Box textAlign="center">
              <Text color={'#8a8a8aff'} fontWeight={'600'} fontSize={'1.25rem'}>
                {MoneyData[1].name}
              </Text>
              <Text color={'#3d3d3dff'} fontWeight={'600'} fontSize={'2.25rem'}>
                ₦{MoneyData[1].value}
              </Text>
            </Box>
          </Box>

          {/* Desktop view */}
          <Box display={{ base: 'none', lg: 'block' }}>
            <Text color={'#8a8a8aff'} fontWeight={'600'} fontSize={'1.25rem'}>
              {MoneyData[1].name}
            </Text>
            <Text color={'#3d3d3dff'} fontWeight={'600'} fontSize={'2.25rem'}>
              ₦{MoneyData[1].value}
            </Text>
          </Box>

          {/* Second Divider - Desktop only */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            height="80px"
            zIndex={1}
          >
            <Divider
              orientation="vertical"
              height="100%"
              borderWidth="1px"
              borderColor="black"
            />
          </Box>
        </GridItem>

        {/* Last Item */}
        <GridItem position="relative">
          <Box
            border={{ base: '1px solid', lg: 'none' }}
            borderColor={{ base: 'gray.200', lg: 'none' }}
            borderRadius={{ base: 'md', lg: 'none' }}
            p={{ base: 4, lg: 0 }}
          >
            <Box textAlign={{ base: 'center', lg: 'left' }}>
              <Text color={'#8a8a8aff'} fontWeight={'600'} fontSize={'1.25rem'}>
                {MoneyData[2].name}
              </Text>
              <Text color={'#3d3d3dff'} fontWeight={'600'} fontSize={'2.25rem'}>
                ₦{MoneyData[2].value}
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      {/* <CardComponent /> */}
    </Stack>
  );
};

export default TransactionData;
