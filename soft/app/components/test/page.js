import React from "react";
import Style from "./nav.module.css";

export default function Test() {
  return (
    <nav className={Style.nav}>
      <div>Soft UI Design System</div>
      <div>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
      <div className={Style.btn}>
        <p>github</p>
        <button>push now</button>
      </div>
    </nav>
  );
}
