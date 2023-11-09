import React, { useState } from "react";
import {
  Flex,
  Text,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
} from "@chakra-ui/react";

import InputForm from "../InputForm";
import { currencyFormatter } from "../../utils/function/currencyFormatter";
import { getCategoryIcon } from "../../utils/function/getCategoryIcon";

const ListItem = ({ item, items, setItems }) => {
  const [isEditing, setIsEditing] = useState(-1);

  const onClickListItem = (id) => {
    if (isEditing === id) setIsEditing(-1);
    else setIsEditing(id);
  };

  return (
    <AccordionItem>
      <AccordionButton onClick={() => onClickListItem(item.id)}>
        <Flex w="100%" alignItems="center">
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="#eee"
            w="40px"
            h="40px"
            borderRadius="35%"
          >
            <Icon as={getCategoryIcon(item.category)} boxSize={6} />
          </Flex>
          <Box flex="1" p="0px 15px" textAlign="left">
            <Text fontSize="md">{item.description}</Text>
            <Text fontSize="sm" color="gray.500">
              {item.category}
            </Text>
          </Box>
          <Text fontSize="xl">{currencyFormatter(item.amount)}</Text>
        </Flex>
      </AccordionButton>
      {isEditing === item.id && (
        <AccordionPanel pb={4}>
          <InputForm
            isAddForm={false}
            setIsEditing={setIsEditing}
            items={items}
            setItems={setItems}
            item={item}
          />
        </AccordionPanel>
      )}
    </AccordionItem>
  );
};

export default ListItem;
