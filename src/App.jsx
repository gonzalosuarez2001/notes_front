import Notes from "./components/Notes";

function App() {
  sessionStorage.setItem("user_id", "1");

  return <Notes />;
}

export default App;
