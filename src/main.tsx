import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PersonalPage from './PersonalPage.tsx'
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// Definindo as rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/personal/:name",
    element: <PersonalPage></PersonalPage>,
  },
]);

// Renderizando a aplicação com RouterProvider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
