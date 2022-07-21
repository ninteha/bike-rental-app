import { Button } from "@mui/material";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../FirebaseConfig";
import DashPostsLayout from "../Content/DashPostsLayout";

const Posts = () => {
  const pathname = window.location.pathname;
  const [postsList, setPostsList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const postsRef = collection(db, "bikes");
  const [isEditing, setIsEditing] = useState(false);

  // Edit Posts states
  
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [randstate, setRandstate] = useState(0); 

  // Edit Posts
  const updatePost = async (id) => {
    setRandstate(randstate + 1);
    await updateDoc(doc(postsRef, id), {
      title: title,
      color: color,
      model: model,
      price: price,
      location: location,
    });
    setIsEditing(false)
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Delete Posts

  const deletePost = async (id) => {
    setRandstate(randstate + 1);
    const postsDoc = doc(db, "bikes", id);
    await deleteDoc(postsDoc);
  };
  // Get Posts data from Firebase

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [randstate]);

  console.log("infinityLOOP?")
  return (
    <div>
      {pathname === "/dashboard/posts/" ? (
        <Button
          color="primary"
          variant="outlined"
          style={{ marginLeft: "15px" }}
          // onClick={() => {
          //   setIsOpen(true);
          // }}
        >
          Add Posts
        </Button>
      ) : null}
      {/* <EditUsersModal open={isOpen} onClose={() => setIsOpen(false)} /> */}
      {postsList.length >= 1 ? (
        postsList.map((posts) => {
          return (
            <DashPostsLayout
              key={posts.id}
              pathname={pathname}
              model={posts.model}
              color={posts.color}
              postsId={posts.id}
              img={posts.img}
              price={posts.price}
              title={posts.title}
              location={posts.location}
              setStartDate={setStartDate}
              startDate={startDate}
              deletePost={deletePost}
              updatePost={updatePost}
              setTitle={setTitle}
              setPrice={setPrice}
              setColor={setColor}
              setModel={setModel}
              setLocation={setLocation}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          );
        })
      ) : (
        <h1>There is no data!</h1>
      )}
    </div>
  );
};

export default Posts;
