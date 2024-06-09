import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Navigation from "../Layout/Navigation";

function LandingPage() {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <h2>This is the landing page</h2>
        <p>This is content</p>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
