import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import { UserAuth } from "../../../context/AuthContext";

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const userRef = collection(db, "users");
  const { user } = UserAuth();

  // Get data from Firebase
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userRef);
      setUsersList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      {usersList.map((users) => {
        return <div key={users.id}>{users.email}</div>;
      })}
    </div>
  );
};

export default Users;
