import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {createUseStyles} from 'react-jss'

import instaLogo from '../Assets/Instagram.JPG'

import './signup.css'

export default function SignUp() {

       const useStyles = createUseStyles({
              text1 : {
                     color : 'grey',

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
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
