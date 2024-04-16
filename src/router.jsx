import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import About from "./pages/about-us";
import Skills from "./pages/skills";
import Resume from "./pages/resume";
import Blog from "./pages/blog";
import ErrorPage from "./pages/error404";

const router = createBrowserRouter([
   {
    path: "/jsmcreynolds-site-4/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "about",
            element: <About />,
        },
        {
            path: "skills",
            element: <Skills />,
        },
        {
            path: "resume",
            element: <Resume />,
        },
        {
            path: "blog",
            element: <Blog />,
        },
    ],
   },
]);

export default router;