import { Link } from "react-router";

export function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center px-[32px] py-[48px]"
      style={{ background: "#171719", color: "#989BA2" }}
    >
      <div className="max-w-[1120px] w-full flex flex-col gap-[32px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[24px]">
          <Link to="/" className="heading-heading-20bold" style={{ color: "#fff", textDecoration: "none" }}>LABSfolio</Link>
          <div className="flex items-center gap-[24px]">
            <a href="#" className="body-body-14regular" style={{ color: "#989BA2" }}>이용약관</a>
            <a href="#" className="body-body-14regular" style={{ color: "#989BA2" }}>개인정보처리방침</a>
            <Link to="/contact" className="body-body-14regular" style={{ color: "#989BA2", textDecoration: "none" }}>도입 문의</Link>
          </div>
        </div>
        <div
          className="w-full border-t pt-[24px]"
          style={{ borderColor: "#292A2D" }}
        >
          <p className="body-body-12regular" style={{ color: "#878A93" }}>
            © 2026 Hunet Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
