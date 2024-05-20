import { RouteObject } from "react-router-dom";
import AboutPage from "./page/AboutPage";
import ResumePage from "./page/ResumePage";
import PortofolioPage from "./page/PortofolioPage";
import ContactPage from "./page/ContactPage";
import webRoute from "@common/constants/webRoute";

const router: RouteObject[] = [
  {
    path: webRoute.about,
    element: <AboutPage />,
  },
  {
    path: webRoute.resume,
    element: <ResumePage />,
  },
  {
    path: webRoute.portofolio,
    element: <PortofolioPage />,
  },
  {
    path: webRoute.contact,
    element: <ContactPage />,
  },
];

export default router;
