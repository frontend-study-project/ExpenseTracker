import {
  Container,
  Flex,
  Text,
  VStack,
  Button,
  Box,
  IconButton,
  Spacer,
  Input,
  Select,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { categoryList } from "../../utils/data/categoryList";

const AddItem = () => {
  const [isAdd, setAdd] = useState(false);
  const [value, setValue] = useState("0");
  const format = (val) => `₩ ` + val;
  const parse = (val) => val.replace(/^\₩/, "");
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
          <IconButton
            aria-label="Add List"
            colorScheme="blue"
            size="sm"
            isRound={true}
            icon={<AddIcon />}
            className={isAdd ? "isAdd" : ""}
            onClick={() => setAdd((e) => !e)}
          />
        </Flex>
      </Container>
      {isAdd && (
        <Container>
          <VStack>
            <Box w="100%">
              <Text as="span" fontSize="sm" color="gray.500">
                Category
              </Text>
              <Select size="sm" placeholder="Category">
                {categoryList.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </Box>
            <Box w="100%">
              <Text fontSize="sm" color="gray.500">
                Description
              </Text>
              <Input
                size="sm"
                borderColor="gray.300"
                errorBorderColor="red.300"
                placeholder="Description"
              />
            </Box>
            <Box w="100%">
              <Text fontSize="sm" color="gray.500">
                Amount
              </Text>
              <NumberInput
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                max={50}
                min={0}
              >
                <NumberInputField />
              </NumberInput>
            </Box>
            <Box w="100%">
              <Text fontSize="sm" color="gray.500">
                Date
              </Text>
              <Input
                size="sm"
                borderColor="gray.300"
                errorBorderColor="red.300"
                type="date"
                placeholder="Select Date"
              />
            </Box>
            <Button colorScheme="blue" w="100%" size="sm" mt="10px">
              등록
            </Button>
          </VStack>
        </Container>
      )}
    </>
  );
};
export default AddItem;
