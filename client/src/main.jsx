import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./tailwind.css";
import App from "./App.jsx";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About.jsx";
import Media from "./pages/Media.jsx";
import MeetSchedule from "./pages/MeetSchedule.jsx";
import Join from "./pages/Join.jsx";
import Contact from "./pages/Contact.jsx";
import Entries from "./pages/Entries.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/Meets",
        element: <MeetSchedule />,
      },
      {
        path: "/entries",
        element: <Entries />,
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
