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
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { auth, db } from "../../../FirebaseConfig";
import DashPostsLayout from "../Content/DashPostsLayout";
import AddPostsModal from "./AddPostsModal";


const Posts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = window.location.pathname;
  const [postsList, setPostsList] = useState([]);
  const [filtredPostsList, setfiltredPostsList] = useState(postsList);
  const postsRef = collection(db, "bikes");
  const [isEditing, setIsEditing] = useState(false);
  const { searchFilter } = useContext(SearchContext);
  const [reload, setReload] = useState(false);
  const [cancelRentReload, setCancelRentReload] = useState(false);

  // Cancel Rent
  const cancelRent = async (id) => {
    await updateDoc(doc(postsRef, id), {
      ...postData,
      rentalDate: deleteField(),
      rentedToId: deleteField(),
      rentedTo: deleteField(),
    });
    console.log("post updated ");
    setCancelRentReload(!cancelRentReload);
    setIsEditing(false);
  };

  // Edit Posts states

  const [postData, setPostData] = useState([]);

  const updatePost = async (id) => {
    await updateDoc(doc(postsRef, id), {
      ...postData,
      rentedToId: auth.currentUser.uid,
      rentedTo: auth.currentUser.email,
    });
    console.log("post updated ");
    setIsEditing(false);
    setReload(!reload);
  };

  // Delete Posts

  const deletePost = async (id) => {
    const postsDoc = doc(db, "bikes", id);
    await deleteDoc(postsDoc);
    setReload(!reload);
  };
  // Get Posts data from Firebase

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setfiltredPostsList(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPosts();
  }, [reload, cancelRentReload]);

  // Filter Data
  useEffect(() => {
    const posts = filterPosts();
    setfiltredPostsList(posts);
  }, [searchFilter]);

  const filterPosts = () => {
    let filteredPosts = postsList.reduce((acc, item) => {
      const filterKeys = Object.keys(searchFilter);

      filterKeys.forEach((category) => {
        if (searchFilter[category].includes(item[category])) acc.push(item);
      });

      if (
        item.title.toLowerCase().includes(searchFilter.search) &&
        searchFilter.search.length > 0
      )
        acc.push(item);

      return acc;
    }, []);

    filteredPosts = [...new Set(filteredPosts)];

    if (searchFilter.search.length > 0)
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(searchFilter.search)
      );

    if (!filteredPosts.length > 0 && !searchFilter.search.length > 0)
      return postsList;

    return filteredPosts;
  };

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
        open={isOpen}
        onClose={() => setIsOpen(false)}
        setReload={setReload}
        reload={reload}
      />
      {filtredPostsList.length >= 1 ? (
        filtredPostsList.map((posts) => {
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
