import React, { useState } from 'react';
import { categoryList } from '../../utils/data/categoryList';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input } from '@chakra-ui/react';
import { FaGuitar } from 'react-icons/fa';

const AddCategory = ({ isModalOpen, onModalClose, onModalConfirm }) => {
  /********** useState **********/
  const [inputCategory, setInputCategory] = useState('');

  /********** hanlder function **********/
  const handleInputChange = e => {
    setInputCategory(e.target.value);
  };
  const handleConfirm = () => {
    const newCategoryList = [...categoryList, { name: inputCategory, icon: FaGuitar }];
    categoryList = newCategoryList;
    setInputCategory('');
    onModalConfirm(inputCategory);
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
            <Input placeholder="카테고리 명을 입력 하세요." value={inputCategory} onChange={handleInputChange} />
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
