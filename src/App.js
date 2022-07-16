import React, { useState } from "react";
import Mainpage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Protected from "./pages/RouteProtector/Protected";
import LoggedIn from "./pages/RouteProtector/AlreadyLoggedIn";
import { AuthContextProvider } from "./context/AuthContext";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import DashUsersContent from "./components/AdminDashboard/Content/DashUsersContent";
import DashPostsContent from "./components/AdminDashboard/Content/DashPostsContent";



const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <>
      <AuthContextProvider>
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route
            path="/login/"
            element={
              <LoggedIn isAuth={isAuth}>
                <Login setIsAuth={setIsAuth} />
              </LoggedIn>
            }
          />
          <Route
            path="/signup/"
            element={
              <LoggedIn isAuth={isAuth}>
                <Signup setIsAuth={setIsAuth} />
              </LoggedIn>
            }
          />
          <Route
            path="/dashboard/"
            element={
              <Protected isAuth={isAuth}>
                <Dashboard />
              </Protected>
            }
          >
            <Route path="users" element={<DashUsersContent />} />
            <Route path="posts" element={<DashPostsContent />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
