import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//* Pages
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";

//* Components
import Navbar from './components/Navbar';
import NotFound404 from "./pages/NotFound404";

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  )
}

export default App