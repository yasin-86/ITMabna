import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { CourseProvider } from "./context/Coursecontext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <CourseProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login/>}/>
              <Route path="signup" element={<Signup/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </CourseProvider>
    </>
  );
}

export default App;
