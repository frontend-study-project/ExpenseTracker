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

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState(filterByDate(sortByDate(groupByDate(items)), [startDate, endDate]));
  const [scrollData, setScrollData] = useState([]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const fetchData = async () => {
    try {
      if (page > 1) {
        const newData = data.slice((page - 1) * 3, page * 3);
        setScrollData((prevData) => [...prevData, ...newData]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 });
    const observerTarget = document.getElementById("observer");
    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchData();
    }, [500]);
  }, [page]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPage(1);
      setData(filterByDate(sortByDate(groupByDate(items)), [startDate, endDate]));
    }, [500]);
  }, [items, startDate, endDate]);

  useEffect(() => {
    setScrollData(data.slice(0, page * 3));
    setLoading(false);
  }, [data]);

  return (
    <Container>
      {loading && <Loading />}
      {scrollData.length ? (
        scrollData.map((group, key) => (
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
      <div id="observer"></div>
    </Container>
  );
};
export default List;
