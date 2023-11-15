import React, { useEffect, useState } from "react";
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

const AddItem = ({ items, setItems }) => {
  /* useState */
  const [isAdd, setAdd] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useState({
    id: 0,
    category: "",
    description: "",
    amount: 0,
    date: "",
  });

  /* useEffect */
  useEffect(() => {
    console.log("추가하려고 하는 내용 변화 감지: ", data);
  }, [data]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    setIsValid(!!data.category && data.description && data.amount && data.date);
  }, [data]);

  /* Event Function */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onClickAddButton = () => {
    setItems([...items, data]);

    // Add 후 items.id를 +1 하여 고유한 key 값을 부여
    // setData({ id: items.length + 1, category: '', description: '', amount: 0, date: '' });
  };

  /* Validate Function */
  const format = (val) => `₩ ` + val;
  const parse = (val) => val.replace(/^\₩/, "");

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
              <Select
                size="sm"
                placeholder="선택"
                name="category"
                value={data.category}
                onChange={handleChange}
              >
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
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </Box>
            <Box w="100%">
              <Text fontSize="sm" color="gray.500">
                Amount
              </Text>
              <NumberInput>
                <NumberInputField
                  onChange={handleChange}
                  name="amount"
                  value={data.amount}
                  min={0}
                  max={99999999}
                />
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
                name="date"
                onChange={handleChange}
                value={data.date}
              />
            </Box>
            <Button
              colorScheme="blue"
              w="100%"
              size="sm"
              mt="10px"
              isDisabled={!isValid}
              onClick={onClickAddButton & onOpen}
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
