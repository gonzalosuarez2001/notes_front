import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Notes from "./components/pages/Notes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
