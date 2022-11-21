

import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Image, Input, Spacer, Spinner, StackDivider, Textarea, VStack } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { uplodaDATAfun } from './../Store/action';



export const Post = () => {
  const {saveData}= useSelector((state)=> state)
  console.log(saveData,'current state hai ye')
  const dispatch=useDispatch()
  const [image , setImage]=useState({});
  const [postTEXT, setPOSTtext]=useState('')
  const navigate = useNavigate()



  const handleChange =(e)=>{
      let file =e.target.files[0];
      let ImageURL= URL.createObjectURL(file)
      setImage(ImageURL)
      //setSaveData([{img:ImageURL}])
  }
  const handlePOSTchange =(e)=>{
    //console.log(e.target.value)
        setPOSTtext(e.target.value)
  }
  
   const handleUpload =()=>{
    let task ={image:image,postTEXT:postTEXT ,date:new Date(),id:new Date()};
    
       uplodaDATAfun(task, dispatch )
       setTimeout(()=>{
         navigate("/")
       },500)
  }
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
                 borderRadius={'12px'} height='300px' 
              display={'flex'} justifyContent={'center'} alignItems={'center'}><>Image Pre-View Will Be Displayed Here</></Box>

      
      }
    </div>
  )
} 












































// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Input ,Button,Spinner} from '@chakra-ui/react'

// export const Post = () => {
//     const [image , setImage]=useState('')
//     const [saveData , setSaveData]=useState([]);
//     //console.log(image," selected Img")
//     const hanldeSubmit =()=>{
//       const data = new FormData();
//       data.append("file",image)
//       data.append("upload_preset","apxkkzs8")
//       data.append("cloud_name","dmkidukss")
//        fetch('https://api.cloudinary.com/v1_1/dmkidukss/image/upload',{
//         method:'post',
//         body:data
//       }).then((res)=> res.json())
//     .then((DATA)=>{
//       //console.log(DATA)
//       setSaveData([DATA])
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//     }

//     const hanldeChange =(e)=>{
//            setImage(e.target.files[0]);
//       }
//     console.log(saveData,'DATA OBJ HAI')
 
//   return (
//     <div>Post Image  App
//          <br />
//         <br />
//         <Input size="sm" width='s' type="file" onChange={hanldeChange} />
//         <Button onClick={hanldeSubmit}>Upload</Button>
//         {
//           saveData.length ? saveData.map((elem)=>(
//             <div> 
//               <img aria-required style={{width:'400px', height:'300px',marginTop:'30px',margin:'auto'}} src={elem.url} />
//             </div>
//           )):null
//         //   <Spinner
//         //   thickness='4px'
//         //   speed='0.65s'
//         //   emptyColor='gray.200'
//         //   color='blue.500'
//         //   size='xl'
//         // />
//         }

//         {/* <img  src='http://res.cloudinary.com/dmkidukss/image/upload/v1668872770/fopi82k14mxd61nblhaf.jpg'/> */}

//     </div>
//   )
// }



// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [selectedImages, setSelectedImages] = useState([]);

//   const onSelectFile = (event) => {
//     const selectedFiles = event.target.files;
//     const selectedFilesArray = Array.from(selectedFiles);

//     const imagesArray = selectedFilesArray.map((file) => {
//       return URL.createObjectURL(file);
//     });

//     setSelectedImages((previousImages) => previousImages.concat(imagesArray));

//     // FOR BUG IN CHROME
//     event.target.value = "";
//   };

//   function deleteHandler(image) {
//     setSelectedImages(selectedImages.filter((e) => e !== image));
//     URL.revokeObjectURL(image);
//   }

//   return (
//     <section>
//       <label>
//         + Add Images
//         <br />
//         <span>up to 10 images</span>
//         <input
//           type="file"
//           name="images"
//           onChange={onSelectFile}
//           multiple
//           accept="image/png , image/jpeg, image/webp"
//         />
//       </label>
//       <br />

//       <input type="file" multiple />

//       {selectedImages.length > 0 &&
//         (selectedImages.length > 10 ? (
//           <p className="error">
//             You can't upload more than 10 images! <br />
//             <span>
//               please delete <b> {selectedImages.length - 10} </b> of them{" "}
//             </span>
//           </p>
//         ) : (
//           <button
//             className="upload-btn"
//             onClick={() => {
//               console.log(selectedImages);
//             }}
//           >
//             UPLOAD {selectedImages.length} IMAGE
//             {selectedImages.length === 1 ? "" : "S"}
//           </button>
//         ))}

//       <div className="images">
//         {selectedImages &&
//           selectedImages.map((image, index) => {
//             return (
//               <div key={image} className="image">
//                 <img src={image} height="200" alt="upload" />
//                 <button onClick={() => deleteHandler(image)}>
//                   delete image
//                 </button>
//                 <p>{index + 1}</p>
//               </div>
//             );
//           })}
//       </div>
//     </section>
//   );
// };

// export default App;

