import React from "react";
import { useDispatch } from "react-redux";

import { Flex, Text, Box, AccordionItem, AccordionButton, AccordionPanel, Icon } from "@chakra-ui/react";

import InputForm from "../InputForm";
import { currencyFormatter } from "../../utils/function/currencyFormatter";
import { getCategoryIcon } from "../../utils/function/getCategoryIcon";
import { ACTIVE_ITEM } from "../../redux/item";

const ListItem = ({ item, activeItem }) => {
  const dispatch = useDispatch();

  const onClickListItem = (id) => {
    if (activeItem === id) dispatch(ACTIVE_ITEM(-1));
    else dispatch(ACTIVE_ITEM(id));
  };

  return (
    <AccordionItem>
      <AccordionButton onClick={() => onClickListItem(item.id)}>
        <Flex w="100%" alignItems="center">
          <Flex justifyContent="center" alignItems="center" bg="#eee" w="40px" h="40px" borderRadius="35%">
            <Icon as={getCategoryIcon(item.category)} boxSize={6} />
          </Flex>
          <Box flex="1" p="0px 15px" textAlign="left">
            <Text fontSize="md">{item.description}</Text>
            <Text fontSize="sm" color="gray.500">
              {item.category}
            </Text>
          </Box>
          <Text fontSize="xl">{currencyFormatter(item.amount)}원</Text>
        </Flex>
      </AccordionButton>
      {activeItem === item.id && (
        <AccordionPanel pb={4}>
          <InputForm isAddForm={false} item={item} />
        </AccordionPanel>
      )}
    </AccordionItem>
  );
};

export default ListItem;
