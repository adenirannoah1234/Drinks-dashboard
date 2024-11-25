import { Box, Flex } from '@chakra-ui/react';

type StatusType = 'Sold Goods' | 'Rejected' | 'Returned' | 'Pend Goods';

// interface StyleConfig {
//   color: string;
//   circle: {
//     outer: string;
//     inner: string;
//   };
// }

const TransactionStatus = ({ type }: { type: StatusType }) => {
  const getStyles = (type: StatusType) => {
    const styles = {
      'Sold Goods': {
        color: '#10B981',
        circle: {
          outer: '#10B981',
          inner: '#10B981',
        },
      },
      Rejected: {
        color: '#DC2626',
        circle: {
          outer: '#DC2626',
          inner: '#DC2626',
        },
      },
      Returned: {
        color: '#DC2626',
        circle: {
          outer: '#DC2626',
          inner: '#DC2626',
        },
      },
      'Pend Goods': {
        color: '#78520bff',
        circle: {
          outer: '#78520bff',
          inner: '#78520bff',
        },
      },
    };

    return styles[type] || styles['Sold Goods'];
  };

  const style = getStyles(type);

  return (
    <Flex align="center" gap="12px">
      <Box position="relative">
        <Box
          width="20px"
          height="20px"
          borderRadius="full"
          border="2px solid"
          borderColor={style.circle.outer}
          backgroundColor="transparent"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width="6px"
            height="6px"
            borderRadius="full"
            backgroundColor={style.circle.inner}
          />
        </Box>
      </Box>
      <Box fontSize="16px" fontWeight="normal" color={style.color}>
        {type}
      </Box>
    </Flex>
  );
};

export default TransactionStatus;
