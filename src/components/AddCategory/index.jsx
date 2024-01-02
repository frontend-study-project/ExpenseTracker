import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input } from '@chakra-ui/react';
import { FaGuitar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { ADD_CATEGORY } from '../../redux/category';

const AddCategory = ({ isModalOpen, onModalClose }) => {
  const dispatch = useDispatch();

  /********** useState **********/
  const [data, setData] = useState({
    name: '',
    icon: FaGuitar,
  });

  /********** useEffect **********/
  useEffect(() => {
    console.log('추가하려는 카테고리 감지 ::: ', data);
  }, [data]);

  /********** hanlder function **********/
  const handleInputChange = e => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleConfirm = () => {
    dispatch(ADD_CATEGORY(data));
    setData({
      name: '',
      icon: FaGuitar,
    });
    onModalClose();
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>* 카테고리 추가 *</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input placeholder="카테고리 명을 입력 하세요." name="name" value={data.name} onChange={handleInputChange} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleConfirm}>
              저장
            </Button>
            <Button onClick={onModalClose}>취소</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddCategory;
