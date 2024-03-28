import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about-us.jsx";
import Skills from "./pages/skills.jsx";
import Resume from "./pages/resume.jsx";
import Blog from "./pages/blog.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}
export default App;