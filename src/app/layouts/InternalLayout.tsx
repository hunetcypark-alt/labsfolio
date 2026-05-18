import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { Header } from "../components/Header";

export function InternalLayout() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100vh - 73px)" }}>
        <Outlet />
      </div>
    </div>
  );
}
