import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  VStack,
  Text,
  Select,
  IconButton,
} from '@chakra-ui/react';
import { X } from 'lucide-react';

const NewRecordModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [records, setRecords] = useState<
    Array<{
      id: number;
      productName: string;
      quantity: string;
      pricePerUnit: string;
      subtotal: number;
    }>
  >([
    {
      id: 1,
      productName: '',
      quantity: '',
      pricePerUnit: '',
      subtotal: 0,
    },
  ]);

  const handleAddRecord = () => {
    setRecords([
      ...records,
      {
        id: Date.now(),
        productName: '',
        quantity: '',
        pricePerUnit: '',
        subtotal: 0,
      },
    ]);
  };

  const handleInputChange = (id: number, field: string, value: string) => {
    setRecords(
      records.map((record) => {
        if (record.id === id) {
          let updatedRecord = { ...record };

          if (field === 'quantity') {
            // Remove non-numeric characters and 'pcs' before storing
            const numericValue = value.replace(/[^0-9]/g, '');
            updatedRecord.quantity = numericValue ? `${numericValue}pcs` : '';
            value = numericValue;
          }

          updatedRecord = { ...updatedRecord, [field]: value };

          // Calculating the subtotal whenever quantity or price changes
          if (field === 'quantity' || field === 'pricePerUnit') {
            const quantityNum = Number(
              updatedRecord.quantity.replace('pcs', '')
            );
            updatedRecord.subtotal =
              quantityNum * Number(updatedRecord.pricePerUnit);
          }

          return updatedRecord;
        }
        return record;
      })
    );
  };

  const handleDeleteRecord = (id: number) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', md: 'xl' }}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody mt={10}>
          <Text
            textAlign={'center'}
            fontSize={{ base: '0.8rem', md: '1.6rem' }}
            fontWeight={'600'}
          >
            New Record
          </Text>
          <VStack spacing={6} align={'stretch'}>
            {records.map((record) => (
              <Flex key={record.id} direction="column" w="100%" gap={4}>
                <FormControl>
                  <FormLabel>Product Name</FormLabel>
                  <Flex>
                    <Input
                      value={record.productName}
                      focusBorderColor="#00a862ff"
                      _hover={{ borderColor: '#00a862ff' }}
                      onChange={(e) =>
                        handleInputChange(
                          record.id,
                          'productName',
                          e.target.value
                        )
                      }
                    />
                    {records.length > 1 && record.id !== records[0].id && (
                      <IconButton
                        aria-label="Delete Record"
                        icon={<X />}
                        color="red"
                        onClick={() => handleDeleteRecord(record.id)}
                        variant="ghost"
                        _hover={{ bg: 'transparent' }}
                      />
                    )}
                  </Flex>
                </FormControl>
                <Flex justify="space-between" gap={4}>
                  <FormControl w="40%">
                    <FormLabel>Quantity</FormLabel>
                    <Input
                      value={record.quantity}
                      focusBorderColor="#00a862ff"
                      _hover={{ borderColor: '#00a862ff' }}
                      type="number"
                      onChange={(e) =>
                        handleInputChange(record.id, 'quantity', e.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl w="40%">
                    <FormLabel>Price Per Unit</FormLabel>
                    <Input
                      type="number"
                      value={record.pricePerUnit}
                      focusBorderColor="#00a862ff"
                      _hover={{ borderColor: '#00a862ff' }}
                      onChange={(e) =>
                        handleInputChange(
                          record.id,
                          'pricePerUnit',
                          e.target.value
                        )
                      }
                    />
                  </FormControl>
                </Flex>
                <FormControl>
                  <FormLabel>Subtotal</FormLabel>
                  <Input
                    focusBorderColor="#00a862ff"
                    _hover={{ borderColor: '#00a862ff' }}
                    value={
                      record.subtotal
                        ? `₦${record.subtotal.toLocaleString()}`
                        : '₦0'
                    }
                    readOnly
                    bg="gray.50"
                  />
                </FormControl>
              </Flex>
            ))}

            <Button
              bg="#2D2D2D"
              color="white"
              _hover={{ bg: '#1D1D1D' }}
              w="40%"
              borderRadius={'3xl'}
              onClick={handleAddRecord}
            >
              Add New Record
            </Button>
            <FormControl>
              <FormLabel>Total Amount</FormLabel>
              <Input
                type="number"
                readOnly
                bg="gray.50"
                focusBorderColor="#00a862ff"
                _hover={{ borderColor: '#00a862ff' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Amount Sent to Account</FormLabel>
              <Input
                type="number"
                readOnly
                bg="gray.50"
                focusBorderColor="#00a862ff"
                _hover={{ borderColor: '#00a862ff' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Amount at Hand</FormLabel>
              <Input
                type="number"
                readOnly
                bg="gray.50"
                focusBorderColor="#00a862ff"
                _hover={{ borderColor: '#00a862ff' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Payment Type</FormLabel>
              <Select
                placeholder="Select option"
                focusBorderColor="#00a862ff"
                _hover={{ borderColor: '#00a862ff' }}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="#2D2D2D"
            color="white"
            _hover={{ bg: '#1D1D1D' }}
            mr={3}
            borderRadius={'3xl'}
          >
            Submit
          </Button>
          <Button
            variant="ghost"
            onClick={onClose}
            border={'1px solid red'}
            color={'red'}
            borderRadius={'3xl'}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewRecordModal;
