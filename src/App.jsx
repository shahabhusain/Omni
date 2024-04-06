import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
