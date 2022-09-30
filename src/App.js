import "./App.css";
import Activity from "./Components/Activity/Activity";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Questions from "./Components/questions/Questions";

function App() {
  return (
    <div className="bg-primary-content capitalize">
      <Header />
      <Profile />
      <Activity />
      <Questions />
    </div>
  );
}

export default App;
