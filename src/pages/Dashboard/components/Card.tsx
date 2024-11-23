
import {
  Grid,
  Card,
  Box,
  Flex,
  Text,
  Icon,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { PiChartLine } from 'react-icons/pi';
import { TransactionData } from './data';
const CardComponent = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }}
      gap={4}
    >
      {TransactionData.map((metric, index) => (
        <Card key={index} bg="#2b2b2bff" borderRadius={'1rem'}>
          <Box p={4}>
            <Flex justify="space-between" align="center" mb={4}>
              <Stack>
                <Text color="white" fontSize="0.9375rem" fontWeight="500">
                  {metric.goods}
                </Text>
                <Text color="white" fontSize="1.625rem" fontWeight="600">
                  {metric.value}
                </Text>
              </Stack>

              <Icon
                as={PiChartLine}
                color="black"
                size={20}
                h={'2.2rem'}
                w={'2.2rem'}
                bg={'white'}
                borderRadius={'0.3rem'}
              />
            </Flex>
            <Divider borderColor={'#ffffff'} borderWidth={'1px'} />
            <Text color="#f2f2f2ff" fontSize="sm" mt={3} ml={2}>
              {metric.updated}
            </Text>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export default CardComponent;
