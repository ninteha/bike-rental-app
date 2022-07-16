import { Navigate } from "react-router-dom";
const LoggedIn = ({ isAuth, children }) => {
  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default LoggedIn;
