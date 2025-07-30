import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import LoginModal from "./features/user/LoginModal"
import RegisterModel from "./features/user/RegisterModal"
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import DataContext from "./Context/Context";
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <DataContext.Provider value={{ showLogin, setShowLogin }}>
        <Navbar />
        <div className="pt-5">
          <AppRoutes />
        </div>
        <LoginModal/>
        <Footer />
      </DataContext.Provider>
    </>
  );
}

export default App;
