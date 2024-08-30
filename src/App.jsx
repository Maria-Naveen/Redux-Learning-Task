import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllUsersDisplay from "./Pages/AllUsersDisplay";
import UserInfoDisplay from "./Pages/UserInfoDisplay";
// import NavBar from "./components/NavBar";
import "./index.css";
const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar></NavBar> */}
      <Routes>
        <Route path="/" element={<AllUsersDisplay />}></Route>
        <Route path="/about/:id" element={<UserInfoDisplay />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
