import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
