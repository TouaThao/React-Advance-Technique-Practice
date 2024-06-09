import React, { useMemo, useCallback, useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Navigation from "../Layout/Navigation";

function LandingPage() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  // This hook memoize the result of a calculation. calculation only run when the list change
  const total = useMemo(() => {
    console.log("calculating total...");
    return list.reduce((acc, num) => acc + num, 0);
  }, [list]);

  // CallBack: This Hook here memoizes a function so it does not get recreated on every render
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <h2>This is the landing page</h2>
        <p>This is content</p>
        <button onClick={increment}>Increment</button>
        <p>Count :{count}</p>
        <p>Total : {total}</p>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
