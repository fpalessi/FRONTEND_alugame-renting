import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import Profile from "./pages/Profile";
import CarForm from "./pages/CarForm";
import OwnCars from "./pages/OwnCars";
import CarPage from "./pages/CarPage";
import RentedCars from "./pages/RentedCars";
import NotFound from "./pages/NotFound";

axios.defaults.baseURL = import.meta.env.VITE_API;
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/acc" element={<Profile />} />
          <Route path="/acc/cars" element={<OwnCars />} />
          <Route path="/acc/cars/new" element={<CarForm />} />
          <Route path="/acc/cars/:id" element={<CarForm />} />
          <Route path="/car/:id" element={<CarPage />} />
          <Route path="/acc/rentals" element={<RentedCars />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
