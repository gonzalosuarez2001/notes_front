import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import Settings from "./pages/Settings";
import Layout from "./components/Layout.jsx";
import { NoteContextProvider } from "./contexts/NoteContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserContextProvider } from "./contexts/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <NoteContextProvider>
          <Router>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/notes"
                element={
                  <Layout>
                    <Notes />
                  </Layout>
                }
              />
              <Route
                path="/settings"
                element={
                  <Layout>
                    <Settings />
                  </Layout>
                }
              />
            </Routes>
          </Router>
        </NoteContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
