

import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Image, Input, Spacer, Spinner, StackDivider, Textarea, VStack } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { uplodaDATAfun } from './../Store/action';


//D\FUNCTION TO POST IMAGE
export const Post = () => {
  const {saveData}= useSelector((state)=> state)
  console.log(saveData,'current state hai ye')
  const dispatch=useDispatch()
  const [image , setImage]=useState({});
  const [postTEXT, setPOSTtext]=useState('')
  const navigate = useNavigate()
  
  //FUNCTION TO CREATE IMG URL
  const handleChange =(e)=>{
      let file =e.target.files[0];
      let ImageURL= URL.createObjectURL(file)
      setImage(ImageURL)
      //setSaveData([{img:ImageURL}])
  }
  //FUNCTION TO HANDLE CHANGE IMAGE REPLCAEMENT
  const handlePOSTchange =(e)=>{
    //console.log(e.target.value)
        setPOSTtext(e.target.value)
  }
  //FUNCTION TO UPLOAD TO THE DATABASAE
   const handleUpload =()=>{
    let task ={image:image,postTEXT:postTEXT ,date:new Date(),id:new Date()};
    
       uplodaDATAfun(task, dispatch )
       setTimeout(()=>{
         navigate("/")
       },500)
  }
   //FUNCTION TO DLETE ELEM FROM DATBASE AND FROM UI
  const handleDelete =(elem)=>{
       const updatdData = saveData.filter((el)=> el.img !== elem.img)
       //setSaveData(updatdData)
       window.location.reload()
  }
  //console.log(saveData,'array aya ')
  return (
    <div>
      <Input size="s" width='s' 
             type="file"
              onChange={handleChange}
             accept="image/png ,image/jpeg, image/webp"
      />
      <Button onClick={()=> navigate("/")}>See Posts</Button>
    
       { image.length ?
          <Box>
              <Image src={ image} w="300px" h="200px" m="auto"/>
              <> 
              <VStack
                  divider={<StackDivider borderColor='gray.200' />}
                  spacing={4}
                  align='stretch'
                >
                  <Textarea border="1px solid lightgrey" width={['45%','45%','30%','20%']}
                       margin='auto' height='5rem' mt='1' placeholder='Write Description'
                       borderRadius={'8px'}
                      onChange={(e)=> handlePOSTchange(e)}
                  />
          </VStack>
              </>
              <Button onClick={(elem)=>handleDelete(elem) }>Delete </Button>{'        '}
              <Button onClick={handleUpload}>Upload</Button>
        </Box>
        : <Box border="0.5px solid lightgrey" width={['50%','40%','30%','30%']}  m="auto"  mt="30px" 
                 borderRadius={'12px'} height='300px'  display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <>Image Pre-View Will Be Displayed Here</></Box>
      }
    </div>
  )
} 
