import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Overlay from "./components/Overlay.jsx";
import Work from "./pages/Work.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/work",
    element: <Work />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="background-gradient">
      <Overlay></Overlay>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
