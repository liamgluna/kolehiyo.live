import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Explore from "./pages/Explore";
import NotFound from "./pages/NotFound";
import University, { UniversityLoader } from "./pages/University";
import { UniversitiesLoader } from "./pages/Explore";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/explore"
        element={<Explore />}
        loader={UniversitiesLoader}
      />
      <Route
        path="/universities/:id"
        element={<University />}
        loader={UniversityLoader}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
