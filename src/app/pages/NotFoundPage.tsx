import { useNavigate } from "react-router";

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col flex-1 items-center justify-center px-[24px] py-[96px]" style={{ background: "#F7F7F8" }}>
      <div className="flex flex-col items-center gap-[24px] text-center">
        <span className="heading-heading-48bold" style={{ color: "#EAEBEC" }}>404</span>
        <div className="flex flex-col gap-[8px]">
          <h1 className="heading-heading-24bold" style={{ color: "#171719" }}>페이지를 찾을 수 없습니다</h1>
          <p className="body-body-16regular" style={{ color: "#17171999" }}>요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        </div>
        <button onClick={() => navigate("/")} className="h-[48px] px-[28px] rounded-[8px] cursor-pointer" style={{ background: "#0066FF", color: "#fff" }}>
          <span className="body-body-16medium">홈으로</span>
        </button>
      </div>
    </main>
  );
}
