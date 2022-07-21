import React, { useEffect, useState } from "react";
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
import { auth } from "./FirebaseConfig";
import Manager from "./pages/RouteProtector/Manager";
import DashRentedBikesContent from "./components/AdminDashboard/Content/DashRentedBikesContent";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        if (idTokenResult.claims.role === "admin") {
          setIsAdmin(true);
          localStorage.setItem("isAdmin", true);
        } else {
          setIsAdmin(false);
          localStorage.setItem("isAdmin", false);
        }
      }
    });
  }, []);
  return (
    <>
      <AuthContextProvider>
        <Header
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
        />
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
              <Manager isAdmin={isAdmin}>
                <Protected isAuth={isAuth}>
                  <Dashboard />
                </Protected>
              </Manager>
            }
          >
            <Route path="users" element={<DashUsersContent />} />
            <Route path="posts" element={<DashPostsContent />} />
            <Route path="rentedbikes" element={<DashRentedBikesContent />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
