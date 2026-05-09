import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import ModernHome from "./pages/ModernHome";

import ModernProjects from "./pages/ModernProjects";
import ModernAbout from "./pages/ModernAbout";
import ModernContact from "./pages/ModernContact";
import Certificates from "./pages/Certificates";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: ModernHome },

      { path: "projects", Component: ModernProjects },
      { path: "certificates", Component: Certificates },
      { path: "about", Component: ModernAbout },
      { path: "contact", Component: ModernContact },
    ],
  },
]);