import React, { useEffect, useState } from "react";
import { Container, Text, Accordion, Box } from "@chakra-ui/react";

import ListItem from "../ListItem";
import {
  groupByDate,
  sortByDate,
  filterByDate,
} from "../../utils/function/filterByDate";

const List = ({ filterData, setFilterData, startDate, endDate }) => {
  useEffect(() => {
    console.log("필터링된 items", filterData);
  }, [filterData]);
  const [isEditing, setIsEditing] = useState(-1);

  return (
    <Container>
      {filterData.length ? (
        filterData.map((group, key) => (
          <Accordion key={key} pb="20px">
            <Text fontSize="md" color="gray.500">
              {group.date}
            </Text>

            <ListItem
              key={key}
              item={group}
              items={filterData}
              setItems={setFilterData}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
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
