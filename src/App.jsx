import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import About from "./pages/about-us.jsx";
import Skills from "./pages/skills.jsx";
import Resume from "./pages/resume.jsx";
import Blog from "./pages/blog.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <>
      <Header />        
      <Outlet />
      <Footer />
    </>
  );
}
export default App;