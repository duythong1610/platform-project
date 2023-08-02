import React from "react";
import MenuComponent from "./Menu/MenuComponent";

const DefaultLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen">
      <MenuComponent />
      {children}
    </div>
  );
};

export default DefaultLayout;
