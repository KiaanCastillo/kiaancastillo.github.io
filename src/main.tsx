import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { ErrorNotFoundPage, ProjectPage } from "./pages";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="projects/:name" element={<ProjectPage />} />
        <Route path="*" element={<ErrorNotFoundPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
