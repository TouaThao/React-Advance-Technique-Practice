import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Ulti/UserContext.jsx";

const LandingPage = lazy(() => import("./Components/Pages/LandingPage.jsx"));
const AboutPage = lazy(() => import("./Components/Pages/AboutPage.jsx"));
const DashboardPage = lazy(() =>
  import("./Components/Pages/DashboardPage.jsx")
);
const FormPage = lazy(() => import("./Components/Pages/FormPages.jsx"));

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/signup" element={<FormPage />} />
          </Routes>
        </Suspense>
      </Router>
    </UserProvider>
  );
};

export default App;
