import React, { useState } from "react";

const ToggleHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between px-8 shadow-md">
        <img
          className="md:w-24 w-20"
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid"
          alt="logo"
        />
        <nav className="hidden sm:flex gap-6 px-10">
          <span>Home</span>
          <span>Services</span>
          <span>Pricing</span>
          <span>About Us</span>
          <span>Sign Up</span>
        </nav>
        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="sm:hidden text-2xl"
        >
          {showMenu ? "⬅️" : "➡️"}
        </button>
      </div>
      {showMenu && (
        <div className="sm:hidden flex justify-end">
          <nav className="flex flex-col gap-6 px-10 bg-red-600 w-64 py-4 h-screen items-center justify-center">
            <span>Home</span>
            <span>Services</span>
            <span>Pricing</span>
            <span>About Us</span>
            <span>Sign Up</span>
          </nav>
        </div>
      )}
    </header>
  );
};

export default ToggleHeader;
