import * as React from "react";
import { useContext , useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";

import { createUseStyles } from "react-jss";

import {AuthContext} from "../Context/AuthContext"

import instaLogo from "../Assets/Instagram.JPG";
import insta from "../Assets/insta.png";

import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";

import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./login.css";

import {Link , useNavigate} from 'react-router-dom'

export default function SignUp() {

  // const test = useContext(AuthContext)
  // console.log(test)
  const useStyles = createUseStyles({
    text1: {
      color: "grey",
      textAlign: "center",
      marginTop: "3%",
    },

    text2: {
      color: "#0095f6",
    },

    buttonMargin: {
      marginTop: "4%",
    },

    card2: {
      marginTop: "5%",
    },
  });

  const classes = useStyles();


  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [error , setError] = useState('')
  const [loading , setLoading] = useState(false)

  const navigate = useNavigate()


  const {login}  = useContext(AuthContext)

  const handleClick = async ()=>{

    try {

      setError('')
      setLoading(true)

      let res = await login(email , password)

      setLoading(false)
      navigate('/feed')
      
    } catch (error) {
       setError(true)
       setTimeout(()=>{
        setError('')
       } , 2000)

       setLoading(false)
    }
      
      
  }



  return (
    <div className="loginWrapper">
      <div
        className="img-car"
        style={{ backgroundImage: "url(" + insta + ")" , backgroundSize:'cover' }}
      >
        <div className="car">
          <CarouselProvider
               visibleSlides={1}
               totalSlides={5}
               // step={3}
               naturalSlideWidth={238}
               naturalSlideHeight={423}
               hasMasterSpinner
               isPlaying={true}
               infinite={true}
               dragEnabled={false}
               touchEnabled={false}
          >
            <Slider>
              <Slide index={0}>
                <Image src={img1} />
              </Slide>
              <Slide index={1}>
                <Image src={img2} />
              </Slide>
              <Slide index={2}>
                <Image src={img3} />
              </Slide>
              <Slide index={3}>
                <Image src={img4} />
              </Slide>
              <Slide index={4}>
                <Image src={img5} />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>

      <div className="signupCard">
        <Card sx={{ maxWidth: 345 }}>
          <div className="insta-logo">
            <img src={instaLogo} />
          </div>

          <CardContent>
            {error!='' && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              size="small"
              value = {email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="dense"
              fullWidth={true}
              size="small"
              value = {password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <Typography
              variant="subtitle1"
              className={classes.text2}
              margin="dense"
            >
              Forgot Password?
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" fullWidth={true} onClick={handleClick}>
              Log in
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className={classes.card2}>
          <Typography>New User? <Link to='/' style={{textDecoration : 'none'}}>Sign up</Link></Typography>
        </Card>
      </div>
    </div>
  );
}
