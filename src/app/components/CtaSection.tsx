import { useNavigate } from "react-router";

export function CtaSection() {
  const navigate = useNavigate();
  return (
    <section
      className="w-full flex flex-col items-center px-[32px] py-[96px]"
      style={{ background: "#0066FF" }}
    >
      <div className="max-w-[640px] flex flex-col items-center gap-[32px] text-center">
        <div className="flex flex-col items-center gap-[16px]">
          <h2 className="heading-heading-32bold" style={{ color: "#fff" }}>
            지금 바로 도입 문의하세요
          </h2>
          <p className="body-body-16regular" style={{ color: "rgba(255,255,255,0.8)" }}>
            기업 맞춤 연수원 디자인에 관심이 있으시다면,
            <br />
            담당자가 빠르게 연락드리겠습니다.
          </p>
        </div>
        <button
          onClick={() => navigate("/contact")}
          className="flex items-center justify-center h-[56px] px-[32px] rounded-[8px] cursor-pointer"
          style={{ background: "#fff", color: "#0066FF" }}
        >
          <span className="body-body-16medium">도입 문의하기</span>
        </button>
      </div>
    </section>
  );
}
