import { useNavigate } from "react-router";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-[32px] py-[96px]"
      style={{ background: "#FFF" }}
    >
      <div className="max-w-[800px] flex flex-col items-center gap-[32px] text-center">
        <div className="flex flex-col items-center gap-[16px]">
          <span
            className="body-body-14mdeium px-[12px] py-[4px] rounded-[9999px]"
            style={{ background: "#EBF3FF", color: "#0066FF" }}
          >
            영업 지원 포트폴리오 서비스
          </span>
          <h1
            className="heading-heading-48bold"
            style={{ color: "#171719" }}
          >
            기업 연수원 디자인 시안을
            <br />
            한곳에서 관리하고 공유하세요
          </h1>
        </div>
        <p
          className="body-body-18regular"
          style={{ color: "#17171999", maxWidth: 560 }}
        >
          휴넷이 제작한 기업 연수원 디자인 시안을 한곳에 모아, 고객사 맞춤 레퍼런스를 구성하고 보안 링크로 즉시 공유하세요.
        </p>
        <div className="flex items-center gap-[12px]">
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center justify-center h-[56px] px-[32px] rounded-[8px] cursor-pointer"
            style={{ background: "#0066FF", color: "#fff" }}
          >
            <span className="body-body-16medium">도입 문의하기</span>
          </button>
          <button
            onClick={() => navigate("/cases")}
            className="flex items-center justify-center h-[56px] px-[32px] rounded-[8px] cursor-pointer border"
            style={{ borderColor: "#E1E2E4", background: "#FFF", color: "#171719" }}
          >
            <span className="body-body-16medium">고객 사례 보기</span>
          </button>
        </div>
      </div>
      <div className="mt-[64px] w-full max-w-[960px] rounded-[16px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477865300989-86ba6d4adcab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwZGlnaXRhbCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzYyMzk3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="LABSfolio 서비스 화면"
          className="w-full object-cover"
          style={{ height: 400 }}
        />
      </div>
    </section>
  );
}
