import React from 'react'

import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl,FormLabel,Input,useDisclosure
  } from '@chakra-ui/react'
//FormControl,FormLabel,Input,
import { useState } from 'react'
  import { FiMenu } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
export const Header = () => {
    const isDesktop = useBreakpointValue({ base: false,lg: true })
const { isOpen, onOpen, onClose } = useDisclosure()
const initialRef = React.useRef(null)
const finalRef = React.useRef(null)
const navigate=useNavigate()
  return (
    <div>
        <Box
          as="section"
          pb='2rem'
          mt="0.5rem"
        >
          <Box as="nav"  bg="bg-surface" borderBottom="1px solid lightgrey"
               boxShadow={useColorModeValue('sm', 'sm-dark')}>
            <Container
              py={{ base: '4',  lg: '5',  }}
            >
              <HStack spacing="10" justify="space-between">
                <Flex justify="space-evenly" flex="1">
                    <ButtonGroup colorScheme={'blue'} variant="link" spacing="4">
                      {['Post Something', 'NewPost', 'Daily Videos', 'Photos','Reels','Stories','Effects'].map((item) => (
                        <Button onClick={()=> navigate("/post")} key={item}>{item}</Button>
                      ))}
                    </ButtonGroup>
        
                  </Flex>
                  <HStack spacing="4" colorScheme={'blue'}>
                    <Button colorScheme={'blue'} >Sign Up</Button>
                      <Button  colorScheme={'whatsapp'} onClick={onOpen}>Log In</Button>
                      <Link  colorScheme={'whatsapp'} ></Link>
                    </HStack>
              </HStack>
            </Container>
</Box>
         
      

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red'  onClick={onClose}>Cancel</Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
          

        
    </div>
  )
}
