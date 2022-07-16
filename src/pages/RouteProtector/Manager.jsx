// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { db } from "../../FirebaseConfig";
// const Manager = ({ isAuth, children }) => {
//   const [usersList, setUsersList] = useState([]);
//   const userRef = collection(db, "users");

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(userRef);
//       setUsersList(data.docs.map((doc) => ({ ...doc.data(), role: doc.role })));
//     };
//     getUsers();
//   });
  

//   if (usersList !== "manager") { >> MAKE AN USER ROLE BASED ROUTER
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };
// export default Manager;
