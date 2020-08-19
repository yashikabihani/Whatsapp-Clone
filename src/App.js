import React from 'react';
import './App.css';
import SideBar from "./Sidebar";

function App() {
  return (
    <div className="app">

      <div className="app__body">
        {/* SideBar */}
        <SideBar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
