import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Container, Text, IconButton, Box, Spacer, Flex, Button, NumberInputField, NumberInput, Input, VStack, Select } from '@chakra-ui/react';

const AddItem = ({ format, parse, value, setValue }) => {
  const [isAdd, setAdd] = useState(false);

  return (
    <>
      <Container>
        <Flex alignItems="center">
          <Box>
            <Text as="span" fontWeight="b" fontSize="4xl" pr="3px">
              &#8361;
            </Text>
            <Text as="span" fontWeight="b" fontSize="4xl">
              50,000
            </Text>
          </Box>
          <Spacer />
          <IconButton aria-label="Add List" colorScheme="blue" size="sm" isRound={true} icon={<AddIcon />} className={isAdd ? 'isAdd' : ''} onClick={() => setAdd(e => !e)} />
        </Flex>
      </Container>
      {isAdd && (
        <Container>
          -
          <VStack>
            <Box w="100%">
              <Text as="span" fontSize="sm" color="gray.500">
                Category
              </Text>
              <Select size="sm" placeholder="Category">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box w="100%">
              <Text fontSize="sm" color="gray.500">
                Description
              </Text>
              <Input size="sm" borderColor="gray.300" errorBorderColor="red.300" placeholder="Description" />
            </Box>
            <Box w="100%">
              <Text fontSize="sm" color="gray.500">
                Amount
              </Text>
              <NumberInput onChange={valueString => setValue(parse(valueString))} value={format(value)} max={50} min={0}>
                <NumberInputField />
              </NumberInput>
            </Box>
            <Box w="100%">
              <Text fontSize="sm" color="gray.500">
                Date
              </Text>
              <Input size="sm" borderColor="gray.300" errorBorderColor="red.300" type="date" placeholder="Select Date" />
            </Box>
            <Button colorScheme="blue" w="100%" size="sm" mt="10px">
              Add
            </Button>
          </VStack>
        </Container>
      )}
    </>
  );
};

export default AddItem;
