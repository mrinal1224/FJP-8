import React, { useState } from 'react'

import Button from '@mui/material/Button';
import MovieIcon from '@material-ui/icons/Movie';
import LinearProgress from '@mui/material/LinearProgress';

import {database , storage} from '../firebase' ;

import {v4 as uuidv4} from 'uuid'


function UploadFile(props) {

       console.log(props.user)

 const [error , setError] = useState('')
 const [loading , setLoading] = useState(false)



 const handleChange = async(file)=>{

       console.log('running')
          if(file == null) {
              setError('Please Select a file')
              setTimeout(()=>{
                  setError('')
              } , 2000)
              return;
          }

          if(file.size/(1024*1024)>100){
              setError('This video is very Large cannot uplaod')

              setTimeout(()=>{
                     setError('')
                 } , 2000)
                 return;
          }

          let uid = uuidv4()
          setLoading(true)

          const uploadTask = storage.ref(`/posts/${uid}/${file.name}`).put(file);

          uploadTask.on("state_changed" , fn1 , fn2 , fn3)


          function fn1(snapshot){
              let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
              console.log(`Upload is ${progress} done.`)
          }

          function fn2(error){
              setError(error);
              setTimeout(()=>{
                  setError('')
              },2000);
              setLoading(false)
              return;
          }
 

       function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
              let obj = {
                     likes : [],
                     comments : [],
                     pId : uid,
                     pUrl : url,
                     uName : props.user.fullname,
                     uProfile : props.user.profileUrl,
                     userId : props.user.userId,
                     createdAt : database.getTimestamp()


                 }

                 database.posts.add(obj).then(async(ref)=>{
                     let res = await database.users.doc(props.user.userId).update({
                            postIds : props.user.postIds!=null ? [...props.user.postIds,ref.id] : [ref.id]
                     })
                 }).then(()=>{
                     setLoading(false)
                 }).catch((err)=>{
                     setError(err)
                     setTimeout(()=>{
                         setError('')
                     },2000)
                     setLoading(false)
                 })
            })
       }


          //setLoading(false)



 }





  return (
    <div style={{marginTop : '5rem' , marginBottom : '1rem'}}>
       {
              <>

              <input type='file' accept='video/*'  id="upload-input" style={{display:'none'}} onChange={(e)=>handleChange(e.target.files[0])} />
                     <label htmlFor="upload-input">
                     <Button variant='outlined' color='secondary' component="span"  >
                       <MovieIcon/> &nbsp; Upload Icon
                     </Button>
                     </label>

                     {loading && <LinearProgress color='secondary'  style={{marginTop:'3%'}}/>}
             
              </>
       }
    </div>
  )
}

export default UploadFile