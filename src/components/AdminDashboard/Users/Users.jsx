/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import DashUsersLayout from "../Content/DashUsersLayout";
import { Button } from "@mui/material";
import AddUsersModal from "./AddUsersModal";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const userRef = collection(db, "users");
  const [randstate, setRandstate] = useState(0);
  const [userData, setUserData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // Edit Users
  const updateUser = async (id) => {
    setRandstate(randstate + 1);
    await updateDoc(doc(userRef, id), {
      ...userData,
    });
    console.log("post updated ");
    setIsEditing(false);
  };
  // Delete Users

  const deleteUser = async (id) => {
    setRandstate(randstate + 1);
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  // Get Users data from Firebase

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userRef);
      setUsersList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [randstate]);

  return (
    <div>
      <Button
        color="primary"
        variant="outlined"
        style={{ marginLeft: "15px" }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add Users
      </Button>
      <AddUsersModal open={isOpen} onClose={() => setIsOpen(false)} />

      {usersList.length >= 1 ? (
        usersList.map((users) => {
          return (
            <DashUsersLayout
              key={users.id}
              email={users.email}
              password={users.password}
              usersId={users.id}
              deleteUser={deleteUser}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              userData={userData}
              setUserData={setUserData}
              updateUser={updateUser}
            />
          );
        })
      ) : (
        <h1>There is no data!</h1>
      )}
    </div>
  );
};

export default Users;
