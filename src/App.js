import React, { useState } from 'react';
import './App.css';
import { Container, Flex, Text, VStack, Button, Box, IconButton, Spacer, Input, Select, NumberInput, NumberInputField, Accordion, AccordionItem, AccordionButton, AccordionPanel, Tooltip } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { PiCoffeeFill } from 'react-icons/pi';

function App() {
  const [isAdd, setAdd] = useState(false);

  const format = (val) => `₩ ` + val;
  const parse = (val) => val.replace(/^\₩/, '');
  const [value, setValue] = useState('0');

  return (
    <div className='App'>
      <VStack maxW='500px' m='30px auto' p='50px 40px' borderRadius='30px' spacing='30px' bg='white' boxShadow='lg'>
        <Container>
          <Flex alignItems='center'>
            <Box>
              <Text as='span' as='b' fontSize='4xl' pr='3px'>
                &#8361;
              </Text>
              <Text as='span' as='b' fontSize='4xl'>
                50,000
              </Text>
            </Box>
            <Spacer />
            <IconButton aria-label='Add List' colorScheme='blue' size='sm' isRound={true} icon={<AddIcon />} className={isAdd ? 'isAdd' : ''} onClick={() => setAdd((e) => !e)} />
          </Flex>
        </Container>
        {isAdd && (
          <Container>
            <VStack>
              <Box w='100%'>
                <Text as='span' fontSize='sm' color='gray.500'>
                  Category
                </Text>
                <Select size='sm' placeholder='Category'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </Box>
              <Box w='100%'>
                <Text fontSize='sm' color='gray.500'>
                  Description
                </Text>
                <Input size='sm' borderColor='gray.300' errorBorderColor='red.300' placeholder='Description' />
              </Box>
              <Box w='100%'>
                <Text fontSize='sm' color='gray.500'>
                  Amount
                </Text>
                <NumberInput onChange={(valueString) => setValue(parse(valueString))} value={format(value)} max={50} min={0}>
                  <NumberInputField />
                </NumberInput>
              </Box>
              <Box w='100%'>
                <Text fontSize='sm' color='gray.500'>
                  Date
                </Text>
                <Input size='sm' borderColor='gray.300' errorBorderColor='red.300' type='date' placeholder='Select Date' />
              </Box>
              <Button colorScheme='blue' w='100%' size='sm' mt='10px'>
                Add
              </Button>
            </VStack>
          </Container>
        )}
        <Container>
          <VStack alignItems='flex-end'>
            <Select size='xs' w='68px'>
              <option value='option1'>2023</option>
              <option value='option2'>2022</option>
              <option value='option3'>2021</option>
            </Select>
            <Flex w='100%'>
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
              <Spacer />
              <VStack spacing='3px'>
                <Tooltip hasArrow placement='top' label='₩ 20,000' fontSize='xs'>
                  <Flex w='18px' h='150px' bg='#eee' borderRadius='5px' alignItems='end'>
                    <Box w='100%' h='20%' bg='#3182ce' borderRadius='0 0 5px 5px'></Box>
                  </Flex>
                </Tooltip>
                <Text fontSize='xs' color='gray.500'>
                  Jan
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </Container>
        <Container>
          <Accordion allowToggle pb='20px'>
            <Text fontSize='md' color='gray.500'>
              08.01
            </Text>
            <AccordionItem>
              <AccordionButton>
                <Flex w='100%' alignItems='center'>
                  <IconButton aria-hidden size='md' bg='#eee' borderRadius='35%' icon={<PiCoffeeFill />} />
                  <Box flex='1' p='0px 15px' textAlign='left'>
                    <Text fontSize='md'>Toilet Paper</Text>
                    <Text fontSize='sm' color='gray.500'>
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize='xl'>50,000</Text>
                </Flex>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack>
                  <Box w='100%'>
                    <Text as='span' fontSize='sm' color='gray.500'>
                      Category
                    </Text>
                    <Select size='sm' placeholder='Category'>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                  </Box>
                  <Box w='100%'>
                    <Text fontSize='sm' color='gray.500'>
                      Description
                    </Text>
                    <Input size='sm' borderColor='gray.300' errorBorderColor='red.300' placeholder='Description' />
                  </Box>
                  <Box w='100%'>
                    <Text fontSize='sm' color='gray.500'>
                      Amount
                    </Text>
                    <NumberInput onChange={(valueString) => setValue(parse(valueString))} value={format(value)} max={50} min={0}>
                      <NumberInputField />
                    </NumberInput>
                  </Box>
                  <Box w='100%'>
                    <Text fontSize='sm' color='gray.500'>
                      Date
                    </Text>
                    <Input size='sm' borderColor='gray.300' errorBorderColor='red.300' type='date' placeholder='Select Date' />
                  </Box>
                  <Flex w='100%' mt='10px'>
                    <Spacer />
                    <Spacer />
                    <Button colorScheme='black' variant='outline' size='sm' p='0 15px'>
                      Cancle
                    </Button>
                    <Spacer />
                    <Button colorScheme='red' variant='outline' size='sm' p='0 15px'>
                      Delete
                    </Button>
                    <Spacer />
                    <Button colorScheme='blue' size='sm' p='0 15px'>
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
                <Flex w='100%' alignItems='center'>
                  <IconButton aria-hidden size='md' bg='#eee' borderRadius='35%' icon={<PiCoffeeFill />} />
                  <Box flex='1' p='0px 15px' textAlign='left'>
                    <Text fontSize='md'>Toilet Paper</Text>
                    <Text fontSize='sm' color='gray.500'>
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize='xl'>50,000</Text>
                </Flex>
              </AccordionButton>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Flex w='100%' alignItems='center'>
                  <IconButton aria-hidden size='md' bg='#eee' borderRadius='35%' icon={<PiCoffeeFill />} />
                  <Box flex='1' p='0px 15px' textAlign='left'>
                    <Text fontSize='md'>Toilet Paper</Text>
                    <Text fontSize='sm' color='gray.500'>
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize='xl'>50,000</Text>
                </Flex>
              </AccordionButton>
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <Text fontSize='md' color='gray.500'>
              08.01
            </Text>
            <AccordionItem>
              <AccordionButton>
                <Flex w='100%' alignItems='center'>
                  <IconButton aria-hidden size='md' bg='#eee' borderRadius='35%' icon={<PiCoffeeFill />} />
                  <Box flex='1' p='0px 15px' textAlign='left'>
                    <Text fontSize='md'>Toilet Paper</Text>
                    <Text fontSize='sm' color='gray.500'>
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize='xl'>50,000</Text>
                </Flex>
              </AccordionButton>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Flex w='100%' alignItems='center'>
                  <IconButton aria-hidden size='md' bg='#eee' borderRadius='35%' icon={<PiCoffeeFill />} />
                  <Box flex='1' p='0px 15px' textAlign='left'>
                    <Text fontSize='md'>Toilet Paper</Text>
                    <Text fontSize='sm' color='gray.500'>
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize='xl'>50,000</Text>
                </Flex>
              </AccordionButton>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Flex w='100%' alignItems='center'>
                  <IconButton aria-hidden size='md' bg='#eee' borderRadius='35%' icon={<PiCoffeeFill />} />
                  <Box flex='1' p='0px 15px' textAlign='left'>
                    <Text fontSize='md'>Toilet Paper</Text>
                    <Text fontSize='sm' color='gray.500'>
                      Shopping
                    </Text>
                  </Box>
                  <Text fontSize='xl'>50,000</Text>
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
