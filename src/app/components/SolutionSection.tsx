import { Archive, Link2, Shield, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Archive,
    title: "시안 아카이빙",
    description: "Figma/Zeplin에 분산된 시안을 한곳에 모아 검색·필터로 빠르게 탐색하세요.",
  },
  {
    icon: Link2,
    title: "보안 링크 공유",
    description: "보안 코드와 유효기간을 설정한 링크 하나로 고객사에 즉시 전달하세요.",
  },
  {
    icon: Shield,
    title: "레퍼런스 보드",
    description: "고객사별 맞춤 레퍼런스 보드를 구성하고 순서·메모를 자유롭게 편집하세요.",
  },
  {
    icon: BarChart3,
    title: "열람 통계",
    description: "공유 링크 클릭 수, 시안별 조회 수를 확인해 영업 활동을 추적하세요.",
  },
];

export function SolutionSection() {
  return (
    <section
      className="w-full flex flex-col items-center px-[32px] py-[96px]"
      style={{ background: "#F7F7F8" }}
    >
      <div className="max-w-[1120px] w-full flex flex-col items-center gap-[48px]">
        <div className="flex flex-col items-center gap-[12px] text-center">
          <span className="body-body-14mdeium" style={{ color: "#0066FF" }}>
            주요 솔루션
          </span>
          <h2 className="heading-heading-32bold" style={{ color: "#171719" }}>
            업무를 쉽고 빠르게
          </h2>
          <p className="body-body-16regular" style={{ color: "#17171999" }}>
            반복되는 수작업을 줄이고 제안 품질과 속도를 높이세요.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-[20px] p-[32px] rounded-[12px]"
              style={{ background: "#FFF", border: "1px solid #EAEBEC" }}
            >
              <div
                className="flex items-center justify-center w-[48px] h-[48px] rounded-[12px]"
                style={{ background: "#F5F9FF" }}
              >
                <item.icon size={24} style={{ color: "#0066FF" }} />
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="heading-heading-20bold" style={{ color: "#171719" }}>
                  {item.title}
                </span>
                <p className="body-body-14regular" style={{ color: "#17171999" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
