import * as React from "react";
import { useState , useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

import { database , storage } from "../firebase";

import {createUseStyles} from 'react-jss'

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc,doc } from 'firebase/firestore';

import { AuthContext } from "../Context/AuthContext";

import instaLogo from '../Assets/Instagram.JPG'
import {Link , useNavigate} from "react-router-dom"

import './signup.css'

export default function SignUp() {

       const useStyles = createUseStyles({
              text1 : {
                     color : 'grey',
                     textAlign : 'center',
                     marginTop : '3%'

              },

              buttonMargin : {
                     marginTop : '4%'
              },

              card2:{
                     marginTop : '5%'
              }
       })

       const classes = useStyles()

       const [email , setEmail] = useState('')
       const [password , setPassword] = useState('')
       const [name , setName] = useState('')
       const [file, setFile] = useState(null)
       const [error , setError] = useState('')
       const [loading , setLoading] = useState(false)

       const navigate = useNavigate()


       const {signup} = useContext(AuthContext)


      //  const handleClick = async()=>{
      //    if(file==null){
      //     setError('Profile Picture not uploaded')
      //     setTimeout(()=>{
      //                setError('')
      //     } , 2000)
      //     return
      //    }

      //    try {
      //          let userObj = await signup(email , password)
      //          let uid = userObj.user.uid
      //          console.log(userObj)

      //          const uploadImage = storage.ref(`/users/${uid}/ProfileImage`).put(file)
      //          uploadImage.on('state_changed' , fn1 , fn2,fn3)

      //          function fn1(snapshot){
      //           let progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
      //           console.log(`upload is ${progress} complete`)
      //          }

      //          function fn2(){
      //           setError(error);
      //           setTimeout(()=>{
      //               setError('')
      //           },2000);
      //           setLoading(false)
      //           return;
      //          }

      //          function fn3(){
      //           uploadImage.snapshot.ref.getDownloadURL().then((url)=>{
      //             console.log(url)
      //             database.users.doc(uid).set({
      //               email : email,
      //               userId : uid,
      //               fullname : name,
      //               profileUrl : url,
      //               createdAt : database.getTimestamp()
      //             })
      //           })

      //           setLoading(false)
      //          
      //          }

          
      //    } catch (error) {
      //       setError(error)
      //       console.log(error)
      //    }
      //  }




      let handleClick = async() => {
        console.log(email);
        console.log(password);
        console.log(name);
        console.log(file);
        try {
          setLoading(true);
          setError("");
          const userInfo = await signup(email, password);
          console.log(userInfo.user.uid);
          let uid = userInfo.user.uid
          
          
          // Upload file and metadata to the object 'images/mountains.jpg'
          const storageRef = ref(storage, `${userInfo.user.uid}/Profile`);
          const uploadTask = uploadBytesResumable(storageRef, file);
          // Register three observers:
          // 1. 'state_changed' observer, called any time the state changes
          // 2. Error observer, called on failure
          // 3. Completion observer, called on successful completion
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
            },
            (error) => {
              // A full list of error codes is available at
              // https://firebase.google.com/docs/storage/web/handle-errors
              console.log(error);
            },
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                console.log("File available at", downloadURL);

                database.users.doc(uid).set({
                  email:email,
                  userId:uid,
                  fullname:name,
                  profileUrl:downloadURL,
                  createdAt:database.getTimestamp()
              })
           
    
              });
            }
          );
          console.log("user signed up");
          navigate('/feed')
        }
        catch (err) {
          console.log("err", err);
          setError(err.code);
          // use settimeout to remove error after 2sec
          setTimeout(() => {
            setError("");
          }, 2000);
        }
        setLoading(false);
      
      }

      



  return (
    <div className="signupWrapper">
      <div className='signupCard'>
        <Card sx={{ maxWidth: 345 }}>

              <div className='insta-logo'>
                     <img src={instaLogo}/>
              </div>
          
          <CardContent>
            <Typography variant='subtitle1' className={classes.text1}>
              Sign up to see photos and videos from your friends
            </Typography>
            {error!='' && <Alert severity="error">This is an error alert — check it out!</Alert>}

            <TextField id="outlined-basic" label="Email" variant="outlined" margin='dense' fullWidth={true} size='small' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <TextField id="outlined-basic" label="Password" variant="outlined" margin='dense' fullWidth={true} size='small'value={password} onChange={(e)=>setPassword(e.target.value)} />
            <TextField id="outlined-basic" label="Full Name" variant="outlined" margin='dense' fullWidth={true} size='small' value={name} onChange={(e)=>setName(e.target.value)} />

            <Button color="secondary" variant='outlined' fullWidth={true} component='label' className={classes.buttonMargin} >Upload Profile Picture
             <input type='file' accept="image/*" hidden onChange={(e)=>setFile(e.target.files[0])}/>
            
            </Button>

            <Typography variant='subtitle1' className={classes.text1} margin="dense">
            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
            </Typography>
           
          </CardContent>
          <CardActions>
         
            <Button  variant="contained" fullWidth={true} disable={loading} onClick={handleClick}>Sign Up</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className={classes.card2}>
              <Typography>
                     Have an Account? <Link to='/login' style={{textDecoration : 'none'}}>Log in</Link> 
              </Typography>
        </Card>
      </div>
    </div>
  );
}
