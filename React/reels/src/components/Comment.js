import React, { useEffect, useState } from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";

import { database } from "../firebase";

function Comment({postData}) {

       const [comments , setComments] = useState(null)


       async function fetchComments(){
              let arr = []
                 for(let i=0 ; i< postData.comments.length ; i++){
                     let data = await database.comments.doc(postData.comments[i]).get()
                     arr.push(data.data())
                 }

                 setComments(arr)
            
            
       }

       useEffect(()=>{
               fetchComments()
       } , [postData])
  return (
       <div>
       {comments == null ? (
         <CircularProgress />
       ) : (
         <>
           {comments.map((comment, index) => (
             <div style={{ display: "flex" }}>
               <Avatar src={comment.uProfileImage} />
               <p>
                 &nbsp;&nbsp;
                 <span style={{ fontWeight: "bold" }}>{comment.uName}</span>
                 &nbsp;&nbsp; {comment.comment}
               </p>
             </div>
           ))}
         </>
       )}
     </div>
  )
}

export default Comment