import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Premiums from "./Premiums/Premiums";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Premium" element={<Premiums />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
