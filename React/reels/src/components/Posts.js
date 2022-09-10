import React, { useState, useEffect } from "react";
import { database } from "../firebase";

function Posts({ userData }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let parr = [];

    const unsub = database.posts
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        parr = [];

        querySnapshot.forEach((doc) => {
          let data = { ...doc.data(), postId: doc.id };
          parr.push(data);
        });

        setPosts(parr);
      });
    return unsub;
  }, []);


  console.log(posts)

  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default Posts;
