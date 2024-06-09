import React, { useRef } from "react";
import Navigation from "../Layout/Navigation";

function AboutPage() {
  // This hook provide a way to persis values across render. This is uncontrolled
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <Navigation />
      <h2>This is the about page</h2>
      <p>This is about page content</p>
      <input ref={inputRef} type="text" placeholder="Focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default AboutPage;
