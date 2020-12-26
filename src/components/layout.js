import React from "react";
import MainMenu from "./MainMenu";
import "../assets/main.scss"
import layoutStyles from "./layout.scss"


import Header from "./header"

const Layout = ({ children }) => (
  <div>
    <MainMenu/>
    <div className="container">
      {children}
    </div>
  </div>

)

export default Layout
