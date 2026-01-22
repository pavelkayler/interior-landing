import "./App.css";
import { ContextProvider } from "./context/Context.jsx";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </ContextProvider>
  );
}

export default App;
