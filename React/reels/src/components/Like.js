import React , {useState} from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';

function Like({userData , postData}) {

       const[like , setLike] = useState(true)
  return (
      <div>
       {
              like !=null?
              <>
                   {
                     like==true? <FavoriteIcon className={`icon-styling like`} /> : <FavoriteIcon className={`icon-styling unlike`}/>
                   }   
              </> :
              <>
                   
              </>
       }
      </div>
  )
}

export default Like