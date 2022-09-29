import "./App.css";
import Activity from "./Components/Activity/Activity";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="bg-primary-content capitalize">
      <Header />
      <Profile />
      <Activity />
    </div>
  );
}

export default App;
