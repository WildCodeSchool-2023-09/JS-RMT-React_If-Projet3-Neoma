import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import InscriptionForm from "./pages/InscriptionForm";
import ContactForm from "./pages/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/InscriptionForm",
    element: <InscriptionForm />,
  },
  {
    path: "/ContactForm",
    element: <ContactForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
