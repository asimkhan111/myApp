import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Premiums from "./Premiums/Premiums";
import Signup from "./components/Signup";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


function App() {
  const [authUser, setAuthUser] = useAuth();
console.log(authUser)
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Premium" element={authUser?<Premiums />: <Navigate to ="/signup" />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Toaster />
      </div>
    </>
  );
}

export default App;
