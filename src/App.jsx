import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="animate-wiggle text-6xl">Michael Wiradharma</h1>
        <div className="flex gap-4 mt-4">
          <Link
            to="/work"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-sembilold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Work
          </Link>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-sembilold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Projects
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-sembilold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            About
          </button>
        </div>
        <div className="fixed text-center bottom-0 w-full p-4">
          Copyright © 2024 Michael Wiradharma
        </div>
      </div>
    </>
  );
}

export default App;
