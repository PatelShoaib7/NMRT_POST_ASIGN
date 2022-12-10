import axios from 'axios';
import { HANDLE_UPLOAD_ACTION, ADD_COUNTER_INCREMENT,REDUCE_COUNTER_DECREMENT, ADD_COMMENGT_ON_POST, UPDATE_OR_EDIT_COMMENT, DELETE_COMMENT } from './action.types';
export  const uplodaDATAfun =(task , dispatch)=>{
    // axios.post('http://localhost:8000/data',task)
    // .then((res)=>{
    //   console.log('data is saved')
      dispatch({type:HANDLE_UPLOAD_ACTION , payload:task})
    // })
     .catch((err)=>{
     console.log(err)
     })
 }
 export const incereCount_Fun =(dispatch)=>{
    dispatch({type:ADD_COUNTER_INCREMENT})
 }
 export const decrementCount_FUN =(dispatch)=>{
     dispatch({type:REDUCE_COUNTER_DECREMENT})
 }
 export const add_comment =(obj ,dispatch)=>{
    dispatch({type:ADD_COMMENGT_ON_POST,payload:obj})
 }
 export const updteCommentFUN =(obj,dispatch)=>{
    dispatch({type:UPDATE_OR_EDIT_COMMENT,plyload:obj})
 }
 export const delet_comment_FUN =(obj,dispatch)=>{
     //console.log(obj,'comig obj from SeePost')
    dispatch({type:DELETE_COMMENT,payload:obj})
 }
