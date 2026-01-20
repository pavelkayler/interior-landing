import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../ui/pages/mainPage/MainPage.jsx";
import PortfolioPage from "../../ui/pages/portfolioPage/PortfolioPage.jsx";

const Routes = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/portfolio", element: <PortfolioPage /> },
],{ basename: import.meta.env.BASE_URL });

export default Routes;
