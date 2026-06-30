import Home from "./pages/Home";
import AddNewTask from "./pages/AddNewTask";
import SignIn from "./pages/SignIn";
import LoginPage from "./pages/LoginPage"
import TodaysTask from "./pages/TodaysTask";
import { Route, Routes } from "react-router";
const App = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/add-task" element = {<AddNewTask/>} />
        <Route path="/login" element = { <LoginPage />} />
        <Route path="/signup" element = { <SignIn />} />
        <Route path="/today-task" element = {<TodaysTask />} />
      </Routes>
    </div>
  );
};

export default App;
