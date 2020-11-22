import React from "react";
import "../styles/App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

export default function App() {
  return (
    <div className="app">
      {/* Sidebar  */}
      <Sidebar />
      {/* Posts  */}
      <Feed />
      {/* Widgets  */}
      <Widgets />
    </div>
  );
}
