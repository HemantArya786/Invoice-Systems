import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
};

export default PublicRoutes;
