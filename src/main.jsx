import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import InscriptionForm from "./pages/InscriptionForm";
import Connected from "./pages/layout/Connected";
import Connexion from "./pages/connexion";
import List from "./pages/list";
import { AuthProvider } from "./contexts/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "inscription",
        element: <InscriptionForm />,
      },
      {
        path: "connexion",
        element: <Connexion />,
      },
    ]
  },
  {
    path: "/mon-espace/",
    element: <Connected />,
    children: [
      {
        path: "list",
        element: <List />,
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
