import { Avatar, Box, Button, ButtonGroup, Divider, Flex, Heading, IconButton, Image, Input, Spacer, StackDivider, Textarea, VStack , Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  color,} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { PhoneIcon,ArrowUpIcon ,ArrowDownIcon, EditIcon, ChatIcon, DeleteIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import { add_comment, decrementCount_FUN, delet_comment_FUN, incereCount_Fun, updteCommentFUN } from './../Store/action';
import { Header } from './Header';



export const SeePost = () => {
  const {saveData ,LikeCount,DISLikeCount ,commentData}= useSelector((state)=> state)
  console.log(saveData,'current state SEEpost')
  //console.log(commentData,'commentData Current')
    const [comment ,setComnt]=useState({});
    const [updtaeComment ,setUpdtaeComment]=useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const hanldeComent =(e)=>{
         setComnt(e.target.value)
    }
   const handleCommentData =()=>{
              setComnt('')
       let obj = {comment:comment,date:new Date(),id:commentData.length};
       add_comment(obj, dispatch) 
    }
 const handleUPDATEcmnt=(elem)=>{
          console.log(comment,'****comment old',updtaeComment,'*****updtaeComment')
          updteCommentFUN({oldCommnetVALUE:comment ,comment:updtaeComment}, dispatch)
      }
  const handleDELETEcmnt =(elem)=>{
    //console.log(elem.target.value)
    let obj={comment:elem.target.value ,id:commentData.length}
    delet_comment_FUN(obj,dispatch)
  }

  const handleDELETE_IMAGE =(elem)=>{
   console.log(elem.target.value )
  }
     const handleLIkes =(event)=>{
        event.currentTarget.disabled = true;
        incereCount_Fun(dispatch)
     }

    //DISLIKE COUNTER UODATOR FUNCTION
  const handleLIkeDiske =(event)=>{
    event.currentTarget.disabled = true;
    decrementCount_FUN(dispatch)
  }
  return (
    <div>
      <Header />
    <Box>
       <Button w="40%" m="auto" mb='2'colorScheme={'whatsapp'}  onClick={()=> navigate('/post')}>Post Something</Button>
          <Box>
            {
                saveData.sort((a,b)=>a.postText-b.postText).map((elem ,index)=>(
                  <Box    w="max-content" h='500px'm="auto" border='1px solid lightgrey'
                          borderRadius={'12px'}>
                            <Image w="80%" h="55%" m="auto" border="px solid lightgrey" src={elem.image} 
                                 borderRadius="12px" p='4' mt='2'>
                            </Image>
                            <p style={{color:'lightgrey'}}>{'      '}{elem.postTEXT ?elem.postTEXT : 'no text added to post'}</p>
                            <Box>
                                <VStack spacing={1} align='stretch' h="25%" border="1px solid lightgrey" borderRadius={'12px'}>
                                        <Box  h='25px' display={'flex'} justifyContent={'flex-start'} ml="5"
                                                          border="" fontSize='15px'>LIKE {LikeCount}
                                                              <IconButton  border="2px solid black" borderRadius={'12px'}   onClick={(event)=> handleLIkes(event)}  h="100%"  variant='solid' 
                                                                            colorScheme='whatsapp'  icon={<ArrowUpIcon />}>
                                                              </IconButton>
                                                                            {'         '} DISLIKE {DISLikeCount}
                                                              <IconButton  border="2px solid black"  h="100%" onClick={(event)=>handleLIkeDiske(event)} 
                                                                            variant='solid'colorScheme='red'
                                                                            icon={<ArrowDownIcon />}>
                                                              </IconButton> {'     '}
                                                              <Button colorScheme={'red'} h="110%" ml="7"
                                                                       onClick={(elem)=> handleDELETE_IMAGE(elem)} mb="20px">Delete Image</Button>
                                                             
                                                  </Box>
                                                   <Box  border="0.5px solid lightgrey" borderRadius={'12px'}>
                                                         <Flex minWidth='max-content' alignItems='center'>
                                                                        <Input  w="73%"  onChange={(elem)=>hanldeComent(elem)}
                                                                                placeholder='add a comment' borderRadius={'2px'}>
                                                                        </Input>
                                                                          <Spacer />
                                                                        <Button w="30%" colorScheme='blue' onClick={handleCommentData}>
                                                                           COMMENT 
                                                                        </Button>
                                                          </Flex>
                                           </Box>
                                    </VStack>
                              </Box> 
                            <Box >
                            <p>Comments</p>
                            <Divider borderColor='grey' w="94%" m="auto" />
                            <Box>
                              { commentData.length ? commentData.map((elem)=>(
                                      <Box key={elem.date} display={commentData.length ? '' : 'none'} >
                                                <Flex ml='5' minWidth='max-content' alignItems='center' gap='2'>
                                                          {/* COMMENTS WILLBE SHOWN HERE */}
                                                                  <p> {elem.comment} </p>
                                                                        {/* <Button h="10px" value={elem.comment}
                                                                                onClick={(elem)=>handleEDITcmnt(elem)} 
                                                                                >Edit
                                                                              </Button> */}
                                                                              <Button h="10px" value={elem.comment} onClick={onOpen}>Edit</Button>
                                                                        <Button h="10px" value={elem.comment} 
                                                                                onClick={(elem)=> handleDELETEcmnt(elem)}
                                                                                >Delete
                                                                        </Button>          
                                                </Flex>
                                        </Box>
                                    ))  : <Box color="lightgrey" display={'flex'} justifyContent={"center"}
                                                alignItems={'center'} fontSize={'24px'}>No Comments Till Now <br /> Be First One To Comment</Box>
                              }
                            </Box>  
                              </Box>
                    </Box>
                   )) 
                }
            </Box>













    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
             <ModalContent>
                            <ModalHeader>Update Comment</ModalHeader>
                    <ModalBody>
                          <Input onChange={(e)=> setUpdtaeComment(e.target.value)} placeholder='update comment'/>
                  </ModalBody>
                  <ModalCloseButton />
                  <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                          Cancle
                        </Button>
                        <Button  onClick={handleUPDATEcmnt} colorScheme='whatsapp' variant='solid'>
                        Update</Button>
                  </ModalFooter>
           </ModalContent>
      </Modal>
        </Box>
    </div>
  )
}
