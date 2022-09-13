import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { database } from "../firebase";

function AddComment({ userData, postData }) {
  const [comment, setComment] = useState("");

  const handleClick =()=>{
       let obj={
              comment : comment,
              uProfileImage:userData.profileUrl,
              uName : userData.fullname

       }

       database.comments.add(obj).then((doc)=>{
              database.posts.doc(postData.postId).update({
                     comments : [...postData.comments , doc.id]
              })
       })

       setComment('')
  }
  return (
    <div style={{ width: "100%" }}>
      <TextField
        id="outlined-basic"
        label="Comment"
        variant="outlined"
        size="small"
        sx={{ width: "70%" }}

        value={comment}
        onChange = {(e)=>setComment(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Post Comment</Button>
    </div>
  );
}

export default AddComment;
