import { HANDLE_UPLOAD_ACTION, REDUCE_COUNTER_DECREMENT,ADD_COUNTER_INCREMENT, ADD_COMMENGT_ON_POST, UPDATE_OR_EDIT_COMMENT, DELETE_COMMENT} from "./action.types"

// const [LikeCount , setLikeCount]=useState(11);
// const [DISLikeCount , setDISLikeCount]=useState(10)
// const [comment ,setComnt]=useState({})
// const [commentData, setCommentData]=useState([])


export const initState ={
       saveData:[],
       LikeCount:11,
       DISLikeCount:10,
       commentData:[]
}


export const reducer =(state=initState,{type,payload})=>
{
    console.log(payload,'payload ki value hai ')
    switch(type){
        case HANDLE_UPLOAD_ACTION :{
            
                return {
                     ...state,
                     saveData:[...state.saveData,payload],
                  
                }
            }
        case ADD_COUNTER_INCREMENT :{
            return {
                ...state,
                LikeCount:state.LikeCount+1,
                DISLikeCount:state.DISLikeCount-1
                
            }
        }
        case REDUCE_COUNTER_DECREMENT :{
            return {
                ...state,
                LikeCount:state.LikeCount-1,
                DISLikeCount:state.DISLikeCount+1
            }
        }
        case ADD_COMMENGT_ON_POST :{
            return {
                    ...state,
                    commentData:[payload, ...state.commentData]
            }
        }
        //elem={comment:'',id:''}
        case UPDATE_OR_EDIT_COMMENT :{
         console.log(payload,'of the update or edit')
            const updatedData = state.commentData.map((ele)=>{
            }) 
               
          
        }
        case DELETE_COMMENT :{
            console.log(payload,'delete payoad')
            const upadatedData = state.commentData.filter((ele)=> (ele.comment != payload.comment))
            return {
                ...state,
                commentData:[...upadatedData]
            }
        }
       default:{
        return state
       }
    }
}