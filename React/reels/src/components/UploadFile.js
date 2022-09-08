import React, { useState } from 'react'

import Button from '@mui/material/Button';
import MovieIcon from '@material-ui/icons/Movie';
import LinearProgress from '@mui/material/LinearProgress';

import {database , storage} from '../firebase' ;

import {v4 as uuidv4} from 'uuid'


function UploadFile() {

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

          uploadTask.on("state_changed" , fn1)


          function fn1(snapshot){
              let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
              console.log(`Upload is ${progress} done.`)
          }

          setLoading(false)



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