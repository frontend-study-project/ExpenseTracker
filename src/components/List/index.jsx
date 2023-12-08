import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Container, Text, Accordion, Box } from "@chakra-ui/react";

import ListItem from "../ListItem";
import Loading from "../../components/Loading/index";
import { filterByDate } from "../../utils/function/filterByDate";
import { groupByDate, sortByDate } from "../../utils/function/groupByDate";

const List = ({ startDate, endDate }) => {
  const items = useSelector((state) => state.items.items);
  const activeItem = useSelector((state) => state.items.activeItem);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetch = async () => {
    console.log("받은 items: ", items);

    try {
      setData(filterByDate(sortByDate(groupByDate(items)), [startDate, endDate]));
      setLoading(false);
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetch();
    }, [1000]);
    setLoading(true);
  }, [startDate, items]);

  useEffect(() => {
    console.log(data);
    console.log(loading);
  }, [data, loading]);
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : data.length ? (
        data.map((group, key) => (
          <Accordion key={key} pb="20px">
            <Text fontSize="md" color="gray.500">
              {group.date}
            </Text>
            {group.contents.map((item, key) => (
              <ListItem key={key} item={item} activeItem={activeItem} />
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
