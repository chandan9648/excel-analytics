import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Home from "./pages/auth/Home";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Dashboard from "./pages/dashboard/DashBoard";




const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};



const Nav = () => (
  <nav className="flex items-center justify-between p-4 bg-white border-0  shadow">
    <div className="text-xl font-bold text-black-800 flex items-center gap-2">
      <img
        src="https://img.icons8.com/color/48/excel.png"
        alt="Logo"
        className="w-6 h-6"
      />
      Excel Analytics
    </div>
    <div className="flex items-center space-x-5">
      <Link to="/dashboard" className="text-sm hover:underline">
        🏠 <b>Dashboard</b>
      </Link>
      <Link to="/" className="text-sm hover:underline">
        <b>Login</b>
      </Link>
      <Link to="/signup" className="text-sm hover:underline">
          <b>Signup</b>
      </Link>
    </div>
  </nav>
);


function App() {
  return (  
    <AuthProvider>
      <BrowserRouter>
   
        <Nav/>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
    
  );
};


export default App;
