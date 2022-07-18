/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import DashUsersLayout from "../Content/DashUsersLayout";
import { Button } from "@mui/material";
import AddUsersModal from "./AddUsersModal"
import EditUsersModal from "./EditUsersModal";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const userRef = collection(db, "users");

  // Edit Users

  // db.collection()

  // Delete Users
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  // Get Users data from Firebase
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(userRef);
      setUsersList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deleteUser]);

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
      <EditUsersModal open={isOpen} onClose={() => setIsOpen(false)} />

      {usersList.length >= 1 ? (
        usersList.map((users) => {
          return (
            <DashUsersLayout
              key={users.id}
              email={users.email}
              password={users.password}
              usersId={users.id}
              deleteUser={deleteUser}
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
