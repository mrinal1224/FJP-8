import React , {useState} from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import './Post.css'
function Like({userData , postData}) {

       const[like , setLike] = useState(true)
  return (
      <div>
       {
              like !=null?
              <>
                   {
                     like==true? <FavoriteIcon className={`icon-stying like`} /> : <FavoriteIcon className={`icon-styling unlike`}/>
                   }   
              </> :
              <>
                   
              </>
       }
      </div>
  )
}

export default Like