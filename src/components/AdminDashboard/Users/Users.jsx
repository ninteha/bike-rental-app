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

  const [userData, setUserData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [reload, setReload] = useState(false)

  // Edit Users
  const updateUser = async (id) => {
    await updateDoc(doc(userRef, id), {
      ...userData,
    });
    setIsEditing(false);
  };
  // Delete Users

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    setReload(!reload)
  };

  // Get Users data from Firebase

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userRef);
      setUsersList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();

    return () => {
      setUsersList([]);
    };
  }, [reload]);

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
