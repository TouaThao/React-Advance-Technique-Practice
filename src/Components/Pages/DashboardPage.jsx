import React from "react";
import VirtualizedList from "../Common/VirtualizedList";
import Navigation from "../Layout/Navigation";

function DashboardPage() {
  return (
    <div>
      <Navigation />
      <h2>This is DashBoard Page</h2>
      <p> This is dashboard page content</p>
      <VirtualizedList />
    </div>
  );
}

export default DashboardPage;
