import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Mail, ArrowRight } from "lucide-react";

type Step = "email" | "sent" | "mock-select";

export function LoginPage() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError("이메일을 입력해 주세요.");
      return;
    }
    if (!email.endsWith("@hunet.co.kr")) {
      setEmailError("@hunet.co.kr 이메일 주소만 사용할 수 있습니다.");
      return;
    }
    setEmailError("");
    setStep("sent");
  };

  const handleMockLogin = (role: "designer" | "sales") => {
    login(role);
    navigate("/designs");
  };

  return (
    <main className="flex flex-col flex-1 items-center justify-center px-[24px] py-[64px]" style={{ background: "#F7F7F8" }}>
      <div
        className="w-full max-w-[440px] flex flex-col gap-[32px] p-[40px] rounded-[16px]"
        style={{ background: "#FFF", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
      >
        <div className="flex flex-col items-center gap-[8px] text-center">
          <span className="heading-heading-24bold" style={{ color: "#171719" }}>LABSfolio</span>
          <p className="body-body-14regular" style={{ color: "#17171999" }}>
            휴넷 내부 직원 전용 서비스입니다.
          </p>
        </div>

        {step === "email" && (
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[8px]">
              <h1 className="heading-heading-20bold" style={{ color: "#171719" }}>로그인</h1>
              <p className="body-body-14regular" style={{ color: "#17171999" }}>
                이메일 주소를 입력하면 로그인 링크를 보내드립니다.
              </p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="body-body-14mdeium" style={{ color: "#171719" }}>이메일 주소</label>
              <div className="relative">
                <Mail size={18} className="absolute left-[14px] top-1/2 -translate-y-1/2" style={{ color: "#17171973" }} />
                <input
                  type="email"
                  placeholder="name@hunet.co.kr"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                  className="w-full h-[48px] pl-[44px] pr-[14px] rounded-[8px] outline-none"
                  style={{ border: `1px solid ${emailError ? "#FF3B30" : "#EAEBEC"}`, background: "#FFF", color: "#171719" }}
                  autoFocus
                />
              </div>
              {emailError && <span className="body-body-12regular" style={{ color: "#FF3B30" }}>{emailError}</span>}
              <span className="body-body-12regular" style={{ color: "#17171973" }}>@hunet.co.kr 이메일 주소만 사용 가능합니다.</span>
            </div>
            <button type="submit" className="flex items-center justify-center gap-[8px] h-[52px] rounded-[8px] cursor-pointer" style={{ background: "#0066FF", color: "#fff" }}>
              <span className="body-body-16medium">매직 링크 받기</span>
              <ArrowRight size={18} />
            </button>
            <div className="flex items-center gap-[12px]">
              <div className="flex-1 h-[1px]" style={{ background: "#EAEBEC" }} />
              <span className="body-body-12regular" style={{ color: "#17171973" }}>또는</span>
              <div className="flex-1 h-[1px]" style={{ background: "#EAEBEC" }} />
            </div>
            <div className="flex flex-col gap-[8px] p-[16px] rounded-[8px]" style={{ background: "#F7F7F8", border: "1px dashed #EAEBEC" }}>
              <span className="body-body-12medium" style={{ color: "#17171973" }}>🛠 프로토타입 테스트용 빠른 로그인</span>
              <div className="flex gap-[8px]">
                <button type="button" onClick={() => handleMockLogin("designer")} className="flex-1 h-[40px] rounded-[8px] cursor-pointer border" style={{ borderColor: "#6541F2", background: "#F3F0FE", color: "#6541F2" }}>
                  <span className="body-body-14mdeium">디자이너로 입장</span>
                </button>
                <button type="button" onClick={() => handleMockLogin("sales")} className="flex-1 h-[40px] rounded-[8px] cursor-pointer border" style={{ borderColor: "#0066FF", background: "#EBF3FF", color: "#0066FF" }}>
                  <span className="body-body-14mdeium">영업으로 입장</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {step === "sent" && (
          <div className="flex flex-col items-center gap-[24px] text-center">
            <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full" style={{ background: "#EBF3FF" }}>
              <Mail size={32} style={{ color: "#0066FF" }} />
            </div>
            <div className="flex flex-col gap-[8px]">
              <h2 className="heading-heading-20bold" style={{ color: "#171719" }}>이메일을 확인해 주세요</h2>
              <p className="body-body-14regular" style={{ color: "#17171999" }}>
                <strong>{email}</strong>로 로그인 링크를 보냈습니다.
              </p>
            </div>
            <button onClick={() => setStep("email")} className="body-body-14regular cursor-pointer" style={{ color: "#0066FF", background: "transparent", textDecoration: "underline" }}>다른 이메일로 시도하기</button>
            <div className="w-full flex flex-col gap-[8px] p-[16px] rounded-[8px]" style={{ background: "#F7F7F8", border: "1px dashed #EAEBEC" }}>
              <span className="body-body-12medium" style={{ color: "#17171973" }}>🛠 프로토타입 테스트용 빠른 로그인</span>
              <div className="flex gap-[8px]">
                <button type="button" onClick={() => handleMockLogin("designer")} className="flex-1 h-[40px] rounded-[8px] cursor-pointer border" style={{ borderColor: "#6541F2", background: "#F3F0FE", color: "#6541F2" }}>
                  <span className="body-body-14mdeium">디자이너로 입장</span>
                </button>
                <button type="button" onClick={() => handleMockLogin("sales")} className="flex-1 h-[40px] rounded-[8px] cursor-pointer border" style={{ borderColor: "#0066FF", background: "#EBF3FF", color: "#0066FF" }}>
                  <span className="body-body-14mdeium">영업으로 입장</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
