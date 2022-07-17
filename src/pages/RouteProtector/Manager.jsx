import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Protected = ({ isAuth, children }) => {
  const { users } = UserAuth();

  if (users.role !== "manager") {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
