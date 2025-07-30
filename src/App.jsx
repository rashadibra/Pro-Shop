import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AuthModal from "./features/auth/AuthModalManager"
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import DataContext from "./Context/Context";
import {auth,db} from "./firebase/Firebase"
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <DataContext.Provider value={{ showLogin, setShowLogin }}>
        <Navbar />
        <div className="pt-5">
          <AppRoutes />
        </div>
        <AuthModal/>
        <Footer />
      </DataContext.Provider>
    </>
  );
}

export default App;
