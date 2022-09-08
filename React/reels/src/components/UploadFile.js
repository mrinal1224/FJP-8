import React from 'react'

import Button from '@mui/material/Button';
import MovieIcon from '@material-ui/icons/Movie';

function UploadFile() {
  return (
    <div style={{marginTop : '5rem' , marginBottom : '1rem'}}>
       {
              <>

              <input type='file' accept='video/*'  id="upload-input" style={{display:'none'}} />
                     <label htmlFor="upload-input">
                     <Button variant='outlined' color='secondary' component="span"    >
                       <MovieIcon/> &nbsp; Upload Icon
                     </Button>
                     </label>
             
              </>
       }
    </div>
  )
}

export default UploadFile