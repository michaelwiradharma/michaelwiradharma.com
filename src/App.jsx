import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-noise animate-background-gradient h-screen flex flex-col items-center justify-center">
        <h1 className="animate-wiggle text-6xl">Michael Wiradharma</h1>
        <div className="flex gap-4 mt-4">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-sembilold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Work
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-sembilold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Projects
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-sembilold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            About
          </button>
        </div>
        <div className="fixed text-right bottom-0 w-full p-4">
          Copyright © 2024 Michael Wiradharma
        </div>
      </div>
    </>
  );
}

export default App;
