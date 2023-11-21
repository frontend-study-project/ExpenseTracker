import React, { useEffect, useState } from "react";
import { Container, Text, Accordion, Box } from "@chakra-ui/react";

import ListItem from "../ListItem";
import { filterByDate } from "../../utils/function/filterByDate";
import { groupByDate, sortByDate } from "../../utils/function/groupByDate";

const List = ({ items, setItems, startDate, endDate }) => {
  const data = filterByDate(sortByDate(groupByDate(items)), [
    startDate,
    endDate,
  ]);
  const [isEditing, setIsEditing] = useState(-1);

  return (
    <Container>
      {data.length ? (
        data.map((group, key) => (
          <Accordion key={key} pb="20px">
            <Text fontSize="md" color="gray.500">
              {group.date}
            </Text>
            {group.contents.map((item, key) => (
              <ListItem
                key={key}
                item={item}
                items={items}
                setItems={setItems}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            ))}
          </Accordion>
        ))
      ) : (
        <Box>
          <Text color="gray.500" textAlign="center">
            No Data
          </Text>
        </Box>
      )}
    </Container>
  );
};
export default List;
