import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '../Context/AuthContext'
import { database } from '../firebase'
import UploadFile from './UploadFile'
import Posts from './Posts'


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
   
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
           
            <UploadFile user={userData}/>
            <Posts userData={userData}/>
        </div>
    </>
  );
};

export default Feed;
