import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Container,
  Text,
  IconButton,
  Box,
  Spacer,
  Flex,
  Button,
  NumberInputField,
  NumberInput,
  Input,
  VStack,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { categoryList } from "../../utils/data/categoryList";

const AddItem = ({
  format,
  parse,
  value,
  setValue,
  realItems,
  setRealItems,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isAdd, setAdd] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Container>
        <Flex alignItems="center">
          <Box>
            <Text as="span" fontWeight="b" fontSize="4xl">
              지출 내역
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
              <Select size="sm" placeholder="선택">
                {categoryList.map((category, key) => (
                  <option key={key}>{category.name}</option>
                ))}
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
                placeholder="내용을 입력 하세요."
                value={realItems.description}
                onChange={handleChange}
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
            <Button
              colorScheme="blue"
              w="100%"
              size="sm"
              mt="10px"
              onClick={onOpen}
            >
              Add
            </Button>
          </VStack>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>알림</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack>
                  <Button
                    mb={4}
                    colorScheme={"red"}
                    w={"100%"}
                    onClick={onClose}
                  >
                    추가완료
                  </Button>
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Container>
      )}
    </>
  );
};
export default AddItem;
