import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import SearchPage from "./SearchPage";
import Sidebar from "./Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: (
      <div>
        <Header />
        <div className="app_page">
          <Sidebar />
          <SearchPage />
        </div>
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Header />
        <div className="app_page">
          <Sidebar />
          <SearchPage />
        </div>
      </div>
    ),
  },
  {
    path: "/search/abc",
    element: <p>abb</p>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
