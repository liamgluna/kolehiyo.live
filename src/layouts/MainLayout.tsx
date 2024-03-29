import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Spinner from "../components/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />

      {navigation.state === "loading" && <Spinner loading={true} />}
      {/* {navigation.state === "loading" && toast.info("Loading...")} */}
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
