import { Navigate } from "react-router-dom";
const Manager = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Manager;
