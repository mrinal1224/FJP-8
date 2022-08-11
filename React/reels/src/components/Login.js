import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

import {createUseStyles} from 'react-jss'

import instaLogo from '../Assets/Instagram.JPG'

import './login.css'

export default function SignUp() {

       const useStyles = createUseStyles({
              text1 : {
                     color : 'grey',
                     textAlign : 'center',
                     marginTop : '3%'

              },

              text2 :{
                     color : '#0095f6'
              },

              buttonMargin : {
                     marginTop : '4%'
              },

              card2:{
                     marginTop : '5%'
              }
       })

       const classes = useStyles()


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
            {true && <Alert severity="error">This is an error alert — check it out!</Alert>}

            <TextField id="outlined-basic" label="Email" variant="outlined" margin='dense' fullWidth={true} size='small' />
            <TextField id="outlined-basic" label="Password" variant="outlined" margin='dense' fullWidth={true} size='small' />
            <TextField id="outlined-basic" label="Full Name" variant="outlined" margin='dense' fullWidth={true} size='small' />

            <Button color="secondary" variant='outlined' fullWidth={true} component='label' className={classes.buttonMargin} >Upload Profile Picture
             <input type='file' accept="image/*" hidden/>
            
            </Button>

            <Typography variant='subtitle1' className={classes.text1} margin="dense">
            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
            </Typography>
           
          </CardContent>
          <CardActions>
         
            <Button  variant="contained" fullWidth={true}>Sign Up</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className={classes.card2}>
              <Typography>
                     Have an Account? Log in
              </Typography>
        </Card>
      </div>

      <div className='signupCard'>
        <Card sx={{ maxWidth: 345 }}>

              <div className='insta-logo'>
                     <img src={instaLogo}/>
              </div>
          
          <CardContent>
            
            {true && <Alert severity="error">This is an error alert — check it out!</Alert>}

            <TextField id="outlined-basic" label="Email" variant="outlined" margin='dense' fullWidth={true} size='small' />
            <TextField id="outlined-basic" label="Password" variant="outlined" margin='dense' fullWidth={true} size='small' />
            <Typography variant='subtitle1' className={classes.text2} margin="dense">
                Forgot Password?
            </Typography>
            
           
           
          </CardContent>
          <CardActions>
         
            <Button  variant="contained" fullWidth={true}>Log in</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className={classes.card2}>
              <Typography>
                     New User? Sign up
              </Typography>
        </Card>
      </div>
    </div>
  );
}
