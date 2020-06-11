import React, { useState } from "react";

import "./FullscreenMenu.css";

export default function FullscreenMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <div className="FullscreenMenu">hello</div>}
      <button
        className="FullscreenMenuToggler"
        style={{ color: open ? "white" : "black" }}
        onClick={() => setOpen(!open)}
      >
        <svg width="2rem" height="2rem" viewBox="0 0 24 24">
          <g stroke="currentColor" strokeWidth={2}>
            <line x1="0" y1="4" x2="24" y2="4" />
            <line x1="0" y1="12" x2="24" y2="12" />
            <line x1="0" y1="20" x2="24" y2="20" />
          </g>
        </svg>
      </button>
    </>
  );
}