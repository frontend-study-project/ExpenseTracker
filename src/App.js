import React, { useState } from "react";
import "./App.css";
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { PiCoffeeFill } from "react-icons/pi";
import ReactApexChart from "react-apexcharts";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);
function App() {
  const [isAdd, setAdd] = useState(false);

  const format = (val) => `₩ ` + val;
  const parse = (val) => val.replace(/^\₩/, "");
  const [value, setValue] = useState("0");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // 도넛차트 데이터!!
  const donutData = {
    series: [40, 20, 10, 25, 5],
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
        },
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
                label: "Monthly",
                fontSize: "12px",
                color: "red",
              },
              value: {
                fontSize: "22px",
                show: true,
                color: "blue",
              },
            },
          },
        },
      },
      labels: [
        "Food Expenses",
        "Shopping",
        "Hobby",
        "Transportation Expenses",
        "Insurance Cost",
      ],
      title: {
        text: "Expense Details",
        align: "center",
      },
    },
  };

  return (
    <div className="App">
      <VStack
        maxW="500px"
        m="30px auto"
        p="50px 40px"
        borderRadius="30px"
        spacing="30px"
        bg="white"
        boxShadow="lg"
      >
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
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
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
                Add
              </Button>
            </VStack>
          </Container>
        )}
        <Container>
          <Flex>
            <DatePicker
              showIcon
              dateFormat={"yyyy년 MM월 dd일"}
              locale="ko"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 50 40"
                >
                  <mask id="ipSApplication0">
                    <g
                      fill="none"
                      stroke="#fff"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        d="M40.04 22v20h-32V22"
                      ></path>
                      <path
                        fill="#fff"
                        d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                      ></path>
                    </g>
                  </mask>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSApplication0)"
                  ></path>
                </svg>
              }
            />
            <Box>
              <Text></Text>
            </Box>
            <DatePicker
              locale="ko"
              showIcon
              dateFormat={"yyyy년 MM월 dd일"}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 50 40"
                >
                  <mask id="ipSApplication0">
                    <g
                      fill="none"
                      stroke="#fff"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        d="M40.04 22v20h-32V22"
                      ></path>
                      <path
                        fill="#fff"
                        d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                      ></path>
                    </g>
                  </mask>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSApplication0)"
                  ></path>
                </svg>
              }
            />
          </Flex>
        </Container>

        <div id="chart">
          <ReactApexChart
            options={donutData.options}
            series={donutData.series}
            type="donut"
            width="400"
          />
        </div>
        <Container>
          <Accordion allowToggle pb="20px">
            <Text fontSize="md" color="gray.500">
              08.01
            </Text>
            <AccordionItem>
              <AccordionButton>
                <Flex w="100%" alignItems="center">
                  <IconButton
                    aria-hidden
                    size="md"
                    bg="#eee"
                    borderRadius="35%"
                    icon={<PiCoffeeFill />}
                  />
                  <Box flex="1" p="0px 15px" textAlign="left">
                    <Text fontSize="md">Toilet Paper</Text>
                    <Text fontSize="sm" color="gray.500">
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize="xl">50,000</Text>
                </Flex>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack>
                  <Box w="100%">
                    <Text as="span" fontSize="sm" color="gray.500">
                      Category
                    </Text>
                    <Select size="sm" placeholder="Category">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
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
                  <Flex w="100%" mt="10px">
                    <Spacer />
                    <Spacer />
                    <Button
                      colorScheme="black"
                      variant="outline"
                      size="sm"
                      p="0 15px"
                    >
                      Cancle
                    </Button>
                    <Spacer />
                    <Button
                      colorScheme="red"
                      variant="outline"
                      size="sm"
                      p="0 15px"
                    >
                      Delete
                    </Button>
                    <Spacer />
                    <Button colorScheme="blue" size="sm" p="0 15px">
                      Update
                    </Button>
                    <Spacer />
                    <Spacer />
                  </Flex>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Flex w="100%" alignItems="center">
                  <IconButton
                    aria-hidden
                    size="md"
                    bg="#eee"
                    borderRadius="35%"
                    icon={<PiCoffeeFill />}
                  />
                  <Box flex="1" p="0px 15px" textAlign="left">
                    <Text fontSize="md">Toilet Paper</Text>
                    <Text fontSize="sm" color="gray.500">
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize="xl">50,000</Text>
                </Flex>
              </AccordionButton>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Flex w="100%" alignItems="center">
                  <IconButton
                    aria-hidden
                    size="md"
                    bg="#eee"
                    borderRadius="35%"
                    icon={<PiCoffeeFill />}
                  />
                  <Box flex="1" p="0px 15px" textAlign="left">
                    <Text fontSize="md">Toilet Paper</Text>
                    <Text fontSize="sm" color="gray.500">
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize="xl">50,000</Text>
                </Flex>
              </AccordionButton>
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <Text fontSize="md" color="gray.500">
              08.01
            </Text>
            <AccordionItem>
              <AccordionButton>
                <Flex w="100%" alignItems="center">
                  <IconButton
                    aria-hidden
                    size="md"
                    bg="#eee"
                    borderRadius="35%"
                    icon={<PiCoffeeFill />}
                  />
                  <Box flex="1" p="0px 15px" textAlign="left">
                    <Text fontSize="md">Toilet Paper</Text>
                    <Text fontSize="sm" color="gray.500">
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize="xl">50,000</Text>
                </Flex>
              </AccordionButton>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Flex w="100%" alignItems="center">
                  <IconButton
                    aria-hidden
                    size="md"
                    bg="#eee"
                    borderRadius="35%"
                    icon={<PiCoffeeFill />}
                  />
                  <Box flex="1" p="0px 15px" textAlign="left">
                    <Text fontSize="md">Toilet Paper</Text>
                    <Text fontSize="sm" color="gray.500">
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize="xl">50,000</Text>
                </Flex>
              </AccordionButton>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Flex w="100%" alignItems="center">
                  <IconButton
                    aria-hidden
                    size="md"
                    bg="#eee"
                    borderRadius="35%"
                    icon={<PiCoffeeFill />}
                  />
                  <Box flex="1" p="0px 15px" textAlign="left">
                    <Text fontSize="md">Toilet Paper</Text>
                    <Text fontSize="sm" color="gray.500">
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize="xl">50,000</Text>
                </Flex>
              </AccordionButton>
            </AccordionItem>
          </Accordion>
        </Container>
      </VStack>
    </div>
  );
}

export default App;
