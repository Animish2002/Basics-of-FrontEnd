import React from "react";
import ToggleHeader from "./ToogleHeader";

const Layout = () => {
  return (
    <div>
      <div>
        <ToggleHeader />
        <div className="h-screen flex justify-start md:w-72 w-32 bg-neutral-200 ">
          <h1>Sidebar</h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
