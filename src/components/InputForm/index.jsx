import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Flex, Text, VStack, Button, Box, Spacer, Input, Select } from "@chakra-ui/react";

import { categoryList } from "../../utils/data/categoryList";
import { UPDATE_ITEM, DELETE_ITEM, ACTIVE_ITEM } from "../../redux/item";

const InputForm = ({ isAddForm, item }) => {
  const dispatch = useDispatch();

  const [itemInfo, setItemInfo] = useState(item);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!!itemInfo.category && itemInfo.description && itemInfo.amount && itemInfo.date);
  }, [itemInfo]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
  };

  const onClickCancleButton = () => {
    dispatch(ACTIVE_ITEM(-1));
  };

  const onClickDeleteButton = () => {
    dispatch(DELETE_ITEM(item.id));
    dispatch(ACTIVE_ITEM(-1));
  };

  const onClickUpdateButton = () => {
    dispatch(UPDATE_ITEM(itemInfo));
    dispatch(ACTIVE_ITEM(-1));
  };

  return (
    <VStack>
      <Box w="100%">
        <Text as="span" fontSize="sm" color="gray.500">
          Category
        </Text>
        <Select size="sm" name="category" onChange={onChange} value={itemInfo.category}>
          {categoryList.map((category, key) => (
            <option key={key}>{category.name}</option>
          ))}
        </Select>
      </Box>
      <Box w="100%">
        <Text fontSize="sm" color="gray.500">
          Description
        </Text>
        <Input size="sm" borderColor="gray.300" errorBorderColor="red.300" placeholder="Description" name="description" onChange={onChange} value={itemInfo.description} />
      </Box>
      <Box w="100%">
        <Text fontSize="sm" color="gray.500">
          Amount
        </Text>
        <Input size="sm" borderColor="gray.300" errorBorderColor="red.300" type="number" placeholder="Amount" max={0} min={100000000} name="amount" onChange={onChange} value={itemInfo.amount} />
      </Box>
      <Box w="100%">
        <Text fontSize="sm" color="gray.500">
          Date
        </Text>
        <Input size="sm" borderColor="gray.300" errorBorderColor="red.300" type="date" placeholder="Select Date" name="date" onChange={onChange} value={itemInfo.date} />
      </Box>
      {isAddForm ? (
        <Button colorScheme="blue" w="100%" size="sm" mt="10px">
          Add
        </Button>
      ) : (
        <Flex w="100%" mt="10px">
          <Spacer />
          <Spacer />
          <Button colorScheme="cyan" variant="outline" size="sm" p="0 15px" onClick={onClickCancleButton}>
            Cancle
          </Button>
          <Spacer />
          <Button colorScheme="red" variant="outline" size="sm" p="0 15px" onClick={onClickDeleteButton}>
            Delete
          </Button>
          <Spacer />
          <Button colorScheme="blue" size="sm" p="0 15px" isDisabled={!isValid} onClick={onClickUpdateButton}>
            Update
          </Button>
          <Spacer />
          <Spacer />
        </Flex>
      )}
    </VStack>
  );
};

export default InputForm;
