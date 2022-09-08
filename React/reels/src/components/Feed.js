import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '../Context/AuthContext'
import { database } from '../firebase'
import UploadFile from './UploadFile'

const Feed = () => {

  const {user} = useContext(AuthContext)

  const [userData , setUserData] = useState('')


  useEffect(()=>{
    const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
        setUserData(snapshot.data())
    })
    return ()=> {unsub()}
},[user])

  return (
    <>
      <div>Welcome to Reels</div>

      <UploadFile user={userData} />
    </>
  );
};

export default Feed;
