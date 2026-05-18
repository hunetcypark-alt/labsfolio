import { useState } from "react";
import { Search, X } from "lucide-react";
import { MOCK_DESIGNS, CATEGORY_LABELS, CATEGORY_COLORS, INDUSTRIES } from "../data/mockData";
import { useNavigate } from "react-router";

const PUBLIC_CATEGORIES = [
  { key: "all", label: "전체" },
  { key: "basic", label: "베이직형" },
  { key: "brand", label: "브랜드형" },
  { key: "widget", label: "위젯형" },
];

export function CasesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const publicCases = MOCK_DESIGNS.filter((d) => d.isRepresentative && !d.isArchived);

  const filtered = publicCases.filter((d) => {
    const matchCategory = selectedCategory === "all" || d.category === selectedCategory;
    const matchIndustry = selectedIndustry === "all" || d.industry === selectedIndustry;
    const matchSearch =
      !searchQuery ||
      d.company.includes(searchQuery) ||
      d.title.includes(searchQuery) ||
      d.description.includes(searchQuery) ||
      d.tags.some((t) => t.includes(searchQuery));
    return matchCategory && matchIndustry && matchSearch;
  });

  return (
    <main className="flex flex-col flex-1">
      <section className="w-full flex flex-col items-center px-[32px] py-[64px]" style={{ background: "#F7F7F8" }}>
        <div className="max-w-[720px] w-full flex flex-col items-center gap-[24px] text-center">
          <div className="flex flex-col items-center gap-[12px]">
            <span className="body-body-14mdeium px-[12px] py-[4px] rounded-[9999px]" style={{ background: "#EBF3FF", color: "#0066FF" }}>고객 사례</span>
            <h1 className="heading-heading-32bold" style={{ color: "#171719" }}>다양한 기업이 선택한 연수원 디자인</h1>
            <p className="body-body-16regular" style={{ color: "#17171999" }}>업종과 규모에 맞는 최적의 연수원 디자인을 확인해보세요.</p>
          </div>
          <div className="w-full relative">
            <Search size={18} className="absolute left-[16px] top-1/2 -translate-y-1/2" style={{ color: "#17171973" }} />
            <input
              type="text"
              placeholder="기업명, 태그 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[48px] pl-[44px] pr-[44px] rounded-[8px] outline-none"
              style={{ background: "#FFF", border: "1px solid #EAEBEC", color: "#171719" }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-[16px] top-1/2 -translate-y-1/2">
                <X size={16} style={{ color: "#17171973" }} />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-[32px] py-[48px]" style={{ background: "#FFF" }}>
        <div className="max-w-[1120px] w-full flex flex-col gap-[32px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
            <div className="flex items-center gap-[4px] p-[4px] rounded-[8px]" style={{ background: "#F7F7F8" }}>
              {PUBLIC_CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className="h-[36px] px-[16px] rounded-[6px] cursor-pointer transition-all"
                  style={{
                    background: selectedCategory === cat.key ? "#FFF" : "transparent",
                    color: selectedCategory === cat.key ? "#171719" : "#17171999",
                    boxShadow: selectedCategory === cat.key ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  <span className="body-body-14mdeium">{cat.label}</span>
                </button>
              ))}
            </div>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="h-[40px] px-[12px] rounded-[8px] outline-none cursor-pointer"
              style={{ border: "1px solid #EAEBEC", background: "#FFF", color: "#171719" }}
            >
              <option value="all">전체 산업</option>
              {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
            </select>
            <span className="body-body-14regular ml-auto" style={{ color: "#17171973" }}>온 {filtered.length}개</span>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-[96px] rounded-[12px]" style={{ background: "#F7F7F8" }}>
              <p className="body-body-16regular" style={{ color: "#17171999" }}>검색 결과가 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {filtered.map((item) => {
                const colors = CATEGORY_COLORS[item.category];
                return (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/cases/${item.id}`)}
                    className="flex flex-col rounded-[12px] overflow-hidden cursor-pointer transition-all hover:shadow-lg"
                    style={{ border: "1px solid #EAEBEC" }}
                  >
                    <div className="w-full overflow-hidden" style={{ height: 220 }}>
                      <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="flex flex-col gap-[10px] p-[20px]" style={{ background: "#FFF" }}>
                      <div className="flex items-center gap-[8px]">
                        <span className="body-body-12medium px-[8px] py-[2px] rounded-[4px]" style={{ background: colors.bg, color: colors.text }}>{CATEGORY_LABELS[item.category]}</span>
                        <span className="body-body-12regular" style={{ color: "#17171973" }}>{item.industry} · {item.year}</span>
                      </div>
                      <span className="heading-heading-18bold" style={{ color: "#171719" }}>{item.title}</span>
                      <p className="body-body-14regular line-clamp-2" style={{ color: "#17171999" }}>{item.description}</p>
                      <div className="flex flex-wrap gap-[6px] mt-[4px]">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="body-body-12regular px-[8px] py-[2px] rounded-[4px]" style={{ background: "#F7F7F8", color: "#17171999" }}>#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-[32px] py-[64px]" style={{ background: "#F7F7F8" }}>
        <div className="max-w-[600px] flex flex-col items-center gap-[24px] text-center">
          <div className="flex flex-col items-center gap-[12px]">
            <h2 className="heading-heading-24bold" style={{ color: "#171719" }}>더 많은 레퍼런스가 궁금하신가요?</h2>
            <p className="body-body-16regular" style={{ color: "#17171999" }}>도입 문의를 남겨주시면 담당자가 맞춤형 레퍼런스를 안내해 드립니다.</p>
          </div>
          <button onClick={() => navigate("/contact")} className="flex items-center justify-center h-[48px] px-[28px] rounded-[8px] cursor-pointer" style={{ background: "#0066FF", color: "#fff" }}>
            <span className="body-body-16medium">도입 문의하기</span>
          </button>
        </div>
      </section>
    </main>
  );
}
