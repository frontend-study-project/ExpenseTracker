import React, { useEffect, useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import {
  Container,
  Text,
  IconButton,
  Box,
  Spacer,
  Flex,
  Button,
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
  WrapItem,
} from '@chakra-ui/react';
import { categoryList } from '../../utils/data/categoryList';
import { AddCategory } from '../AddCategory';

const AddItem = ({ items, setItems }) => {
  /* useState */
  const [isAdd, setAdd] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useState({
    id: 0,
    category: '',
    description: '',
    amount: '',
    date: '',
  });
  const [KRW, setKRW] = useState('');
  const [isAlertOpen, onAlertOpen, onAlertClose] = useDisclosure();

  /* useEffect */
  useEffect(() => {
    console.log('추가하려는 데이터 감지 (data)::: ', data);
  }, [data]);

  useEffect(() => {
    // Add 후 items.id를 +1 하여 고유한 key 값을 부여
    setData({
      id: items.length + 1,
      category: '',
      description: '',
      amount: '',
      date: '',
    });
    // items의 데이터가 변경되는 것을 useEffect로 확인
    console.log('추가 된 데이터 (items)::: ', items);
  }, [items]);

  useEffect(() => {
    setIsValid(!!data.category && data.description && data.amount && data.date);
  }, [data]);

  /* Event Function */
  const handleChange = e => {
    const { name, value } = e.target;
    if (name !== 'amount') {
      setData({
        ...data,
        [name]: value,
      });
    } else {
      // Amount에서 숫자 타입이 아닐 경우 Data Setting 방어
      if (/^\d+$/.test(value)) {
        setData({
          ...data,
          [name]: value,
        });
      }
    }

    // Amount 입력 시 원화[￦] 단위 표시
    if (name === 'amount') {
      const tbxKRW = convertAmount(Number(value));
      setKRW(tbxKRW + '원');
    }
  };

  const onClickAddButton = () => {
    setItems([...items, data]);
  };

  // Amount 입력 값 원화 단위 표시 function
  const convertAmount = amount => {
    const units = ['', '십', '백', '천', '만', '억', '조', '경'];
    const digitNames = ['', '', '이', '삼', '사', '오', '육', '칠', '팔', '구'];

    const amountArray = Array.from(String(amount), Number);

    let result = '';
    let unitIndex = 0;

    for (let i = amountArray.length - 1; i >= 0; i--) {
      const digit = amountArray[i];
      const unit = units[unitIndex];

      if (digit !== 0) {
        result = digitNames[digit] + unit + result;
      }

      if (unitIndex < units.length - 1) {
        unitIndex++;
      }
    }
    return result;
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
          <IconButton aria-label="Add List" colorScheme="blue" size="sm" isRound={true} icon={<AddIcon />} className={isAdd ? 'isAdd' : ''} onClick={() => setAdd(e => !e)} />
        </Flex>
      </Container>
      {isAdd && (
        <Container>
          <VStack>
            <Box w="100%">
              <Text as="span" fontSize="sm" color="gray.500">
                Category
              </Text>
              <Select size="sm" placeholder="선택" name="category" value={data.category} onChange={handleChange}>
                {categoryList.map((category, key) => (
                  <option key={key}>{category.name}</option>
                ))}
              </Select>
              <WrapItem>
                <Button colorScheme="linkedin" onClick={onAlertOpen}>
                  카테고리 추가
                </Button>
              </WrapItem>
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
              <Input size="sm" borderColor="gray.300" errorBorderColor="red.300" placeholder="금액을 입력 하세요." name="amount" value={data.amount} onChange={handleChange} />
            </Box>
            {KRW && <div>{KRW}</div>}
            <Box w="100%">
              <Text fontSize="sm" color="gray.500">
                Date
              </Text>
              <Input size="sm" borderColor="gray.300" errorBorderColor="red.300" type="date" placeholder="Select Date" name="date" onChange={handleChange} value={data.date} />
            </Box>
            <Button
              colorScheme="blue"
              w="100%"
              size="sm"
              mt="10px"
              isDisabled={!isValid}
              onClick={() => {
                onClickAddButton();
                onOpen();
              }}
            >
              추가 하기
            </Button>
          </VStack>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>알림</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack>
                  <Button mb={4} colorScheme={'blue'} w={'100%'} onClick={onClose}>
                    추가완료
                  </Button>
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
          <AddCategory isAlertOpen={isAlertOpen} onAlertClose={onAlertClose} />
        </Container>
      )}
    </>
  );
};
export default AddItem;
