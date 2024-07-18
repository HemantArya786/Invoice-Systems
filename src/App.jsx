import "./App.css";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

export default function App() {
  // let isLoggedIn = localStorage.getItem("token");
  let isLoggedIn = true;

  return isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
}
