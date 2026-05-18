import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "LABSfolio는 어떤 서비스인가요?", a: "LABSfolio는 휴넷이 제작한 기업 연수원 디자인 시안을 한곳에 모아, 영업 담당자가 고객사 맞춤 레퍼런스를 구성하고 보안 링크로 즉시 공유할 수 있는 영업 지원 포트폴리오 서비스입니다." },
  { q: "외부 고객사도 열람할 수 있나요?", a: "네, 고객사는 회원가입이나 로그인 없이 공유 링크를 통해 레퍼런스를 열람할 수 있습니다. 보안 코드가 설정된 경우 코드 입력 후 열람이 가능합니다." },
  { q: "보안은 어떻게 보장되나요?", a: "공유 링크에 보안 코드와 유효기간을 설정할 수 있으며, 링크 상태(활성/만료/비활성)를 관리하고 접근 로그를 남겨 보안을 강화합니다." },
  { q: "어떤 디바이스에서 사용할 수 있나요?", a: "웹(PC) 브라우저와 웹(모바일) 브라우저에서 모두 사용할 수 있습니다." },
  { q: "도입 문의는 어떻게 하나요?", a: "홈페이지의 '도입 문의' 버튼을 클릭하거나, 레퍼런스 열람 중 '더 많은 레퍼런스 보기' 버튼을 통해 도입 문의를 제출할 수 있습니다." },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full flex flex-col items-center px-[32px] py-[96px]"
      style={{ background: "#F7F7F8" }}
    >
      <div className="max-w-[720px] w-full flex flex-col gap-[48px]">
        <div className="flex flex-col items-center gap-[12px] text-center">
          <span className="body-body-14mdeium" style={{ color: "#0066FF" }}>FAQ</span>
          <h2 className="heading-heading-32bold" style={{ color: "#171719" }}>
            자주 묻는 질문
          </h2>
        </div>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="flex flex-col border-b" style={{ borderColor: "#EAEBEC" }}>
              <button
                className="flex items-center justify-between w-full py-[20px] cursor-pointer"
                style={{ background: "transparent" }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="body-body-16medium text-left" style={{ color: "#171719" }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color: "#17171999",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                  }}
                />
              </button>
              {openIndex === i && (
                <div className="pb-[20px]">
                  <p className="body-body-14regular" style={{ color: "#17171999" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
