import { useNavigate } from "react-router";

const cases = [
  { company: "A사", industry: "금융", category: "브랜드형", year: "2025", img: "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc3NjIzOTcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { company: "B사", industry: "제조", category: "베이직형", year: "2025", img: "https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc2MjM5NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { company: "C사", industry: "IT", category: "위젯형", year: "2024", img: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwd29ya3NwYWNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NjIzOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { company: "D사", industry: "유통", category: "브랜드형", year: "2024", img: "https://images.unsplash.com/photo-1760004811280-f15126cffebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwY29ycG9yYXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc2MjM5NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { company: "E사", industry: "교육", category: "베이직형", year: "2025", img: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwYnVzaW5lc3MlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NjIzOTcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { company: "F사", industry: "의료", category: "위젯형", year: "2024", img: "https://images.unsplash.com/photo-1758611972515-23399a8786df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwcHJvZmVzc2lvbmFsJTIwZGVza3xlbnwxfHx8fDE3NzYyMzk3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

const categoryColor: Record<string, { bg: string; text: string }> = {
  "브랜드형": { bg: "#F3F0FE", text: "#6541F2" },
  "베이직형": { bg: "#EBF3FF", text: "#0066FF" },
  "위젯형": { bg: "#EBFAF0", text: "#00BF40" },
};

export function CaseSection() {
  const navigate = useNavigate();
  return (
    <section
      className="w-full flex flex-col items-center px-[32px] py-[96px]"
      style={{ background: "#FFF" }}
    >
      <div className="max-w-[1120px] w-full flex flex-col gap-[48px]">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[12px]">
            <span className="body-body-14mdeium" style={{ color: "#0066FF" }}>
              고객 사례
            </span>
            <h2 className="heading-heading-32bold" style={{ color: "#171719" }}>
              다양한 기업이 선택했습니다
            </h2>
          </div>
          <button
            onClick={() => navigate("/cases")}
            className="hidden sm:flex items-center justify-center h-[40px] px-[20px] rounded-[8px] cursor-pointer border"
            style={{ borderColor: "#E1E2E4", background: "#FFF", color: "#171719" }}
          >
            <span className="body-body-14mdeium">전체 보기</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {cases.map((item) => {
            const colors = categoryColor[item.category] || categoryColor["베이직형"];
            return (
              <div
                key={item.company}
                onClick={() => navigate("/cases")}
                className="flex flex-col rounded-[12px] overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
                style={{ border: "1px solid #EAEBEC" }}
              >
                <div className="w-full overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={item.img}
                    alt={`${item.company} 연수원`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[8px] p-[20px]" style={{ background: "#FFF" }}>
                  <div className="flex items-center gap-[8px]">
                    <span
                      className="body-body-12medium px-[8px] py-[2px] rounded-[4px]"
                      style={{ background: colors.bg, color: colors.text }}
                    >
                      {item.category}
                    </span>
                    <span className="body-body-12regular" style={{ color: "#17171973" }}>
                      {item.industry} · {item.year}
                    </span>
                  </div>
                  <span className="body-body-16bold" style={{ color: "#171719" }}>
                    {item.company} 기업 연수원
                  </span>
                  <p className="body-body-14regular" style={{ color: "#17171999" }}>
                    맞춤형 연수원 디자인으로 임직원 교육 경험을 혁신했습니다.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
