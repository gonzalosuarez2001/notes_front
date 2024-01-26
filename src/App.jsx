import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Notes from "./components/pages/Notes";
import { NoteContextProvider } from "./contexts/NoteContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <NoteContextProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </NoteContextProvider>
  );
}

export default App;
