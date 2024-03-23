import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import UniversityCards from "../components/UniversityCards";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
