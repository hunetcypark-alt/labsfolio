import { createBrowserRouter } from "react-router";
import { PublicLayout } from "./layouts/PublicLayout";
import { InternalLayout } from "./layouts/InternalLayout";
import { HomePage } from "./pages/HomePage";
import { CasesPage } from "./pages/CasesPage";
import { CaseDetailPage } from "./pages/CaseDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { DesignsPage } from "./pages/DesignsPage";
import { DesignDetailPage } from "./pages/DesignDetailPage";
import { BoardsPage } from "./pages/BoardsPage";
import { BoardDetailPage } from "./pages/BoardDetailPage";
import { MyPage } from "./pages/MyPage";
import { SharePage } from "./pages/SharePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    // Public pages (with Header + Footer)
    path: "/",
    Component: PublicLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "cases", Component: CasesPage },
      { path: "cases/:id", Component: CaseDetailPage },
      { path: "contact", Component: ContactPage },
      { path: "login", Component: LoginPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
  {
    // Internal pages (auth required, no Footer)
    path: "/",
    Component: InternalLayout,
    children: [
      { path: "designs", Component: DesignsPage },
      { path: "designs/:id", Component: DesignDetailPage },
      { path: "boards", Component: BoardsPage },
      { path: "boards/:id", Component: BoardDetailPage },
      { path: "mypage", Component: MyPage },
    ],
  },
  {
    // External share page (standalone, no Header/Footer)
    path: "/share/:token",
    Component: SharePage,
  },
]);
