/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@mui/material";
import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../FirebaseConfig";
import DashPostsLayout from "../Content/DashPostsLayout";
import AddPostsModal from "./AddPostsModal";

const Posts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = window.location.pathname;
  const [postsList, setPostsList] = useState([]);
  const postsRef = collection(db, "bikes");
  const [isEditing, setIsEditing] = useState(false);

  // Cancel Rent
  const cancelRent = async (id) => {
    setRandstate(randstate + 1);
    await updateDoc(doc(postsRef, id), {
      ...postData,
      rentalDate: deleteField(),
      rentedToId: deleteField(),
      rentedTo: deleteField(),
    });
    console.log("post updated ");
    setIsEditing(false);
  };

  // Edit Posts states
  const [randstate, setRandstate] = useState(0);
  const [postData, setPostData] = useState([]);

  const updatePost = async (id) => {
    setRandstate(randstate + 1);
    await updateDoc(doc(postsRef, id), {
      ...postData,
      rentedToId: auth.currentUser.uid,
      rentedTo: auth.currentUser.email,
    });
    console.log("post updated ");
    setIsEditing(false);
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

  return (
    <div>
      {pathname === "/dashboard/posts/" ? (
        <Button
          color="primary"
          variant="outlined"
          style={{ marginLeft: "15px" }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Add Posts
        </Button>
      ) : null}
      <AddPostsModal
        setRandstate={setRandstate}
        randstate={randstate}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
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
              rating={posts.rating}
              rentalDate={posts.rentalDate}
              deletePost={deletePost}
              updatePost={updatePost}
              setPostData={setPostData}
              postData={postData}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              uploaded={posts.uploaded.toDate()}
              cancelRent={cancelRent}
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
