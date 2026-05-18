import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { MOCK_DESIGNS, CATEGORY_LABELS, CATEGORY_COLORS } from "../data/mockData";

export function CaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const design = MOCK_DESIGNS.find((d) => d.id === id && d.isRepresentative);

  if (!design) {
    return (
      <main className="flex flex-col flex-1 items-center justify-center py-[96px]">
        <p className="body-body-16regular" style={{ color: "#17171999" }}>사례를 찾을 수 없습니다.</p>
        <button onClick={() => navigate("/cases")} className="mt-[24px] flex items-center justify-center h-[44px] px-[24px] rounded-[8px] cursor-pointer" style={{ background: "#0066FF", color: "#fff" }}>
          <span className="body-body-14mdeium">고객 사례 목록</span>
        </button>
      </main>
    );
  }

  const colors = CATEGORY_COLORS[design.category];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col flex-1">
      <div className="w-full px-[32px] py-[16px] flex items-center gap-[8px]" style={{ borderBottom: "1px solid #EAEBEC" }}>
        <Link to="/cases" className="flex items-center gap-[4px] body-body-14regular" style={{ color: "#17171999", textDecoration: "none" }}>
          <ArrowLeft size={16} />고객 사례
        </Link>
        <span className="body-body-14regular" style={{ color: "#17171973" }}>/</span>
        <span className="body-body-14regular" style={{ color: "#171719" }}>{design.title}</span>
      </div>

      <section className="w-full flex flex-col items-center px-[32px] py-[48px]" style={{ background: "#FFF" }}>
        <div className="max-w-[960px] w-full flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <span className="body-body-12medium px-[8px] py-[2px] rounded-[4px]" style={{ background: colors.bg, color: colors.text }}>{CATEGORY_LABELS[design.category]}</span>
              <span className="body-body-12regular" style={{ color: "#17171973" }}>{design.industry} · {design.year}</span>
            </div>
            <h1 className="heading-heading-32bold" style={{ color: "#171719" }}>{design.title}</h1>
            <p className="body-body-16regular" style={{ color: "#17171999", maxWidth: 640 }}>{design.description}</p>
          </div>

          <div className="relative w-full rounded-[16px] overflow-hidden" style={{ background: "#F7F7F8" }}>
            <img src={design.images[currentImageIndex]} alt={`${design.title} 화면 ${currentImageIndex + 1}`} className="w-full object-cover" style={{ height: 480 }} />
            {design.images.length > 1 && (
              <>
                <button onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))} disabled={currentImageIndex === 0} className="absolute left-[16px] top-1/2 -translate-y-1/2 flex items-center justify-center w-[40px] h-[40px] rounded-full cursor-pointer" style={{ background: "rgba(255,255,255,0.9)", opacity: currentImageIndex === 0 ? 0.4 : 1 }}>
                  <ChevronLeft size={20} style={{ color: "#171719" }} />
                </button>
                <button onClick={() => setCurrentImageIndex(Math.min(design.images.length - 1, currentImageIndex + 1))} disabled={currentImageIndex === design.images.length - 1} className="absolute right-[16px] top-1/2 -translate-y-1/2 flex items-center justify-center w-[40px] h-[40px] rounded-full cursor-pointer" style={{ background: "rgba(255,255,255,0.9)", opacity: currentImageIndex === design.images.length - 1 ? 0.4 : 1 }}>
                  <ChevronRight size={20} style={{ color: "#171719" }} />
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <div className="flex flex-col gap-[24px]">
              {[
                { label: "디자인 유형", items: [CATEGORY_LABELS[design.category]], colors },
              ].map((sec) => (
                <div key={sec.label} className="flex flex-col gap-[12px]">
                  <span className="body-body-14mdeium" style={{ color: "#171719" }}>{sec.label}</span>
                  <div className="flex flex-wrap gap-[8px]">
                    {sec.items.map((s) => <span key={s} className="body-body-14regular px-[12px] py-[6px] rounded-[6px]" style={{ background: sec.colors.bg, color: sec.colors.text }}>{s}</span>)}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-[12px]">
                <span className="body-body-14mdeium" style={{ color: "#171719" }}>화면 유형</span>
                <div className="flex flex-wrap gap-[8px]">{design.screenTypes.map((s) => <span key={s} className="body-body-14regular px-[12px] py-[6px] rounded-[6px]" style={{ background: "#F7F7F8", color: "#171719" }}>{s}</span>)}</div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <span className="body-body-14mdeium" style={{ color: "#171719" }}>지원 디바이스</span>
                <div className="flex flex-wrap gap-[8px]">{design.devices.map((d) => <span key={d} className="body-body-14regular px-[12px] py-[6px] rounded-[6px]" style={{ background: "#F7F7F8", color: "#171719" }}>{d}</span>)}</div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]"><span className="body-body-14mdeium" style={{ color: "#171719" }}>산업분야</span><span className="body-body-14regular" style={{ color: "#171719" }}>{design.industry}</span></div>
              <div className="flex flex-col gap-[12px]"><span className="body-body-14mdeium" style={{ color: "#171719" }}>구축연도</span><span className="body-body-14regular" style={{ color: "#171719" }}>{design.year}년</span></div>
              <div className="flex flex-col gap-[12px]">
                <span className="body-body-14mdeium" style={{ color: "#171719" }}>태그</span>
                <div className="flex flex-wrap gap-[8px]">{design.tags.map((tag) => <span key={tag} className="body-body-12regular px-[8px] py-[4px] rounded-[4px]" style={{ background: "#F7F7F8", color: "#17171999" }}>#{tag}</span>)}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-[24px] p-[32px] rounded-[16px]" style={{ background: "#EBF3FF" }}>
            <div className="flex flex-col gap-[8px]">
              <span className="heading-heading-20bold" style={{ color: "#171719" }}>이런 연수원 디자인이 필요하신가요?</span>
              <p className="body-body-14regular" style={{ color: "#17171999" }}>맞춤형 레퍼런스를 구성해 드립니다. 도입 문의를 남겨주세요.</p>
            </div>
            <button onClick={() => setContactOpen(true)} className="flex items-center gap-[8px] h-[48px] px-[28px] rounded-[8px] cursor-pointer whitespace-nowrap" style={{ background: "#0066FF", color: "#fff" }}>
              <MessageSquare size={16} />
              <span className="body-body-16medium">도입 문의하기</span>
            </button>
          </div>
        </div>
      </section>

      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-[24px]" style={{ background: "rgba(0,0,0,0.4)" }} onClick={(e) => { if (e.target === e.currentTarget) setContactOpen(false); }}>
          <div className="w-full max-w-[520px] rounded-[16px] p-[40px] flex flex-col gap-[24px]" style={{ background: "#FFF" }}>
            {!submitted ? (
              <>
                <div className="flex flex-col gap-[8px]">
                  <h2 className="heading-heading-24bold" style={{ color: "#171719" }}>도입 문의</h2>
                  <p className="body-body-14regular" style={{ color: "#17171999" }}>담당자가 확인 후 빠르게 연락드리겠습니다.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
                  {[
                    { key: "name", label: "담당자 성함", placeholder: "홍길동", required: true },
                    { key: "company", label: "회사명", placeholder: "주식회사 예시", required: true },
                    { key: "email", label: "이메일", placeholder: "example@company.com", required: true },
                    { key: "phone", label: "연락처", placeholder: "010-0000-0000", required: false },
                  ].map((field) => (
                    <div key={field.key} className="flex flex-col gap-[6px]">
                      <label className="body-body-14mdeium" style={{ color: "#171719" }}>{field.label}{field.required && <span style={{ color: "#FF3B30" }}> *</span>}</label>
                      <input type="text" placeholder={field.placeholder} required={field.required} value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} className="h-[44px] px-[14px] rounded-[8px] outline-none" style={{ border: "1px solid #EAEBEC", background: "#FFF", color: "#171719" }} />
                    </div>
                  ))}
                  <div className="flex flex-col gap-[6px]">
                    <label className="body-body-14mdeium" style={{ color: "#171719" }}>문의 내용</label>
                    <textarea placeholder="도입 관련 궁금한 점을 남겨주세요." rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="px-[14px] py-[12px] rounded-[8px] outline-none resize-none" style={{ border: "1px solid #EAEBEC", background: "#FFF", color: "#171719" }} />
                  </div>
                  <div className="flex items-center gap-[12px] mt-[8px]">
                    <button type="button" onClick={() => setContactOpen(false)} className="flex-1 h-[48px] rounded-[8px] cursor-pointer border" style={{ borderColor: "#E1E2E4", background: "#FFF", color: "#171719" }}><span className="body-body-16medium">취소</span></button>
                    <button type="submit" className="flex-1 h-[48px] rounded-[8px] cursor-pointer" style={{ background: "#0066FF", color: "#fff" }}><span className="body-body-16medium">문의 제출</span></button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center gap-[16px] py-[24px] text-center">
                <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full" style={{ background: "#EBFAF0" }}><span style={{ fontSize: 32 }}>✓</span></div>
                <h2 className="heading-heading-24bold" style={{ color: "#171719" }}>문의가 접수되었습니다</h2>
                <p className="body-body-14regular" style={{ color: "#17171999" }}>담당자가 영업일 기준 1~2일 내 연락드리겠습니다.</p>
                <button onClick={() => { setContactOpen(false); setSubmitted(false); }} className="h-[48px] px-[32px] rounded-[8px] cursor-pointer" style={{ background: "#0066FF", color: "#fff" }}><span className="body-body-16medium">확인</span></button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
