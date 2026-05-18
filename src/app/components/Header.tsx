import { useState } from "react";
import { Search, Menu, X, ChevronDown, LogOut, User, LayoutGrid, BookOpen } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export function Header() {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const publicLinks = [
    { label: "홈", path: "/" },
    { label: "고객 사례", path: "/cases" },
    { label: "도입 문의", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate("/");
  };

  return (
    <header
      className="w-full flex items-center justify-between px-[32px] py-[16px] border-b sticky top-0 z-50"
      style={{ borderColor: "#EAEBEC", background: "#FFF" }}
    >
      <div className="flex items-center gap-[32px]">
        <Link to="/" className="heading-heading-24bold" style={{ color: "#171719", textDecoration: "none" }}>
          LABSfolio
        </Link>

        {!isLoggedIn && (
          <nav className="hidden md:flex items-center gap-[24px]">
            {publicLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="body-body-16medium"
                style={{
                  color: isActive(link.path) ? "#171719" : "#17171999",
                  textDecoration: "none",
                  borderBottom: isActive(link.path) ? "2px solid #0066FF" : "2px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {isLoggedIn && (
          <nav className="hidden md:flex items-center gap-[24px]">
            <Link
              to="/designs"
              className="body-body-16medium flex items-center gap-[6px]"
              style={{
                color: isActive("/designs") ? "#0066FF" : "#17171999",
                textDecoration: "none",
              }}
            >
              <LayoutGrid size={16} />
              전체 시안
            </Link>
            <Link
              to="/boards"
              className="body-body-16medium flex items-center gap-[6px]"
              style={{
                color: isActive("/boards") ? "#0066FF" : "#17171999",
                textDecoration: "none",
              }}
            >
              <BookOpen size={16} />
              레퍼런스 보드
            </Link>
          </nav>
        )}
      </div>

      <div className="flex items-center gap-[16px]">
        {!isLoggedIn && (
          <>
            <button
              className="hidden md:flex items-center justify-center w-[40px] h-[40px] rounded-[8px]"
              style={{ background: "transparent" }}
            >
              <Search size={20} style={{ color: "#17171999" }} />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="hidden md:flex items-center justify-center h-[40px] px-[20px] rounded-[8px] cursor-pointer"
              style={{ background: "#0066FF", color: "#fff" }}
            >
              <span className="body-body-14mdeium">로그인</span>
            </button>
          </>
        )}

        {isLoggedIn && (
          <div className="hidden md:flex items-center gap-[12px] relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-[8px] h-[40px] px-[12px] rounded-[8px] cursor-pointer"
              style={{ background: "#F7F7F8" }}
            >
              <div
                className="flex items-center justify-center w-[28px] h-[28px] rounded-full"
                style={{ background: "#0066FF", color: "#fff" }}
              >
                <span className="body-body-12medium">{user?.name.charAt(0)}</span>
              </div>
              <span className="body-body-14mdeium" style={{ color: "#171719" }}>
                {user?.name}
              </span>
              <span
                className="body-body-12regular px-[6px] py-[2px] rounded-[4px]"
                style={{
                  background: user?.role === "designer" ? "#F3F0FE" : "#EBF3FF",
                  color: user?.role === "designer" ? "#6541F2" : "#0066FF",
                }}
              >
                {user?.role === "designer" ? "디자이너" : "영업"}
              </span>
              <ChevronDown size={16} style={{ color: "#17171999" }} />
            </button>

            {userMenuOpen && (
              <div
                className="absolute right-0 top-[48px] w-[180px] rounded-[8px] border py-[8px] z-50"
                style={{ background: "#FFF", borderColor: "#EAEBEC", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <button
                  onClick={() => { navigate("/mypage"); setUserMenuOpen(false); }}
                  className="flex items-center gap-[8px] w-full px-[16px] py-[10px] cursor-pointer"
                  style={{ background: "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#F7F7F8")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <User size={16} style={{ color: "#17171999" }} />
                  <span className="body-body-14regular" style={{ color: "#171719" }}>마이페이지</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-[8px] w-full px-[16px] py-[10px] cursor-pointer"
                  style={{ background: "transparent" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#F7F7F8")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <LogOut size={16} style={{ color: "#FF3B30" }} />
                  <span className="body-body-14regular" style={{ color: "#FF3B30" }}>로그아웃</span>
                </button>
              </div>
            )}
          </div>
        )}

        <button
          className="flex md:hidden items-center justify-center w-[40px] h-[40px]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} style={{ color: "#171719" }} /> : <Menu size={24} style={{ color: "#171719" }} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col border-b md:hidden"
          style={{ background: "#FFF", borderColor: "#EAEBEC" }}
        >
          {!isLoggedIn &&
            publicLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="body-body-16medium px-[32px] py-[14px]"
                style={{
                  color: isActive(link.path) ? "#0066FF" : "#171719",
                  textDecoration: "none",
                  borderBottom: "1px solid #EAEBEC",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          {isLoggedIn && (
            <>
              <Link
                to="/designs"
                className="body-body-16medium px-[32px] py-[14px]"
                style={{ color: "#171719", textDecoration: "none", borderBottom: "1px solid #EAEBEC" }}
                onClick={() => setMobileOpen(false)}
              >
                전체 시안
              </Link>
              <Link
                to="/boards"
                className="body-body-16medium px-[32px] py-[14px]"
                style={{ color: "#171719", textDecoration: "none", borderBottom: "1px solid #EAEBEC" }}
                onClick={() => setMobileOpen(false)}
              >
                레퍼런스 보드
              </Link>
              <Link
                to="/mypage"
                className="body-body-16medium px-[32px] py-[14px]"
                style={{ color: "#171719", textDecoration: "none", borderBottom: "1px solid #EAEBEC" }}
                onClick={() => setMobileOpen(false)}
              >
                마이페이지
              </Link>
              <button
                onClick={() => { handleLogout(); setMobileOpen(false); }}
                className="body-body-16medium px-[32px] py-[14px] text-left"
                style={{ color: "#FF3B30", background: "transparent" }}
              >
                로그아웃
              </button>
            </>
          )}
          {!isLoggedIn && (
            <div className="px-[32px] py-[16px]">
              <button
                onClick={() => { navigate("/login"); setMobileOpen(false); }}
                className="flex items-center justify-center w-full h-[44px] rounded-[8px] cursor-pointer"
                style={{ background: "#0066FF", color: "#fff" }}
              >
                <span className="body-body-16medium">로그인</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
