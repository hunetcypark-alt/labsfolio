import { useState } from "react";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";

const INQUIRY_TYPES = ["연수원 디자인 도입", "레퍼런스 열람 요청", "서비스 데모 신청", "기타 문의"];

export function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "", headcount: "", message: "", agreed: false });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = "성함을 입력해 주세요.";
    if (!form.company) newErrors.company = "회사명을 입력해 주세요.";
    if (!form.email) newErrors.email = "이메일을 입력해 주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "올바른 이메일 형식을 입력해 주세요.";
    if (!form.agreed) newErrors.agreed = "개인정보 수집 및 이용에 동의해 주세요.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col flex-1">
      <section className="w-full flex flex-col items-center px-[32px] py-[64px]" style={{ background: "#F7F7F8" }}>
        <div className="max-w-[640px] w-full flex flex-col items-center gap-[16px] text-center">
          <span className="body-body-14mdeium px-[12px] py-[4px] rounded-[9999px]" style={{ background: "#EBF3FF", color: "#0066FF" }}>도입 문의</span>
          <h1 className="heading-heading-32bold" style={{ color: "#171719" }}>기업 맞춤 연수원 디자인 문의</h1>
          <p className="body-body-16regular" style={{ color: "#17171999" }}>아래 양식을 작성해 주시면 담당자가 영업일 기준 1~2일 내 연락드립니다.</p>
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-[32px] py-[64px]" style={{ background: "#FFF" }}>
        <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-3 gap-[48px]">
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[24px]">
              <h2 className="heading-heading-20bold" style={{ color: "#171719" }}>문의 안내</h2>
              <div className="flex flex-col gap-[20px]">
                {[
                  { icon: Mail, label: "이메일", value: "labsfolio@hunet.co.kr", color: "#0066FF", bg: "#EBF3FF" },
                  { icon: Phone, label: "전화", value: "1588-0000", color: "#6541F2", bg: "#F3F0FE" },
                  { icon: Clock, label: "운영시간", value: "평일 09:00 – 18:00", color: "#00BF40", bg: "#EBFAF0" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-[14px]">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] shrink-0" style={{ background: item.bg }}>
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <span className="body-body-12regular" style={{ color: "#17171973" }}>{item.label}</span>
                      <span className="body-body-14mdeium" style={{ color: "#171719" }}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[12px] p-[20px] rounded-[12px]" style={{ background: "#F7F7F8" }}>
              <span className="body-body-14mdeium" style={{ color: "#171719" }}>처리 프로세스</span>
              {["문의 접수", "담당자 배정", "상담 일정 조율", "맞춤 제안서 발송"].map((step, i) => (
                <div key={step} className="flex items-center gap-[10px]">
                  <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full shrink-0" style={{ background: "#0066FF", color: "#fff" }}>
                    <span className="body-body-12medium">{i + 1}</span>
                  </div>
                  <span className="body-body-14regular" style={{ color: "#17171999" }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  {[
                    { key: "name", label: "담당자 성함", placeholder: "홍길동", required: true },
                    { key: "company", label: "회사명", placeholder: "주식회사 예시", required: true },
                    { key: "email", label: "이메일", placeholder: "example@company.com", required: true },
                    { key: "phone", label: "연락처", placeholder: "010-0000-0000", required: false },
                  ].map((field) => (
                    <div key={field.key} className="flex flex-col gap-[6px]">
                      <label className="body-body-14mdeium" style={{ color: "#171719" }}>{field.label}{field.required && <span style={{ color: "#FF3B30" }}> *</span>}</label>
                      <input type={field.key === "email" ? "email" : "text"} placeholder={field.placeholder} required={field.required} value={form[field.key as keyof typeof form] as string} onChange={(e) => { setForm({ ...form, [field.key]: e.target.value }); setErrors({ ...errors, [field.key]: "" }); }} className="h-[48px] px-[14px] rounded-[8px] outline-none" style={{ border: `1px solid ${errors[field.key] ? "#FF3B30" : "#EAEBEC"}`, background: "#FFF", color: "#171719" }} />
                      {errors[field.key] && <span className="body-body-12regular" style={{ color: "#FF3B30" }}>{errors[field.key]}</span>}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="body-body-14mdeium" style={{ color: "#171719" }}>문의 유형</label>
                  <div className="grid grid-cols-2 gap-[8px]">
                    {INQUIRY_TYPES.map((t) => (
                      <button key={t} type="button" onClick={() => setForm({ ...form, type: t })} className="h-[44px] px-[14px] rounded-[8px] cursor-pointer text-left transition-all" style={{ border: `1px solid ${form.type === t ? "#0066FF" : "#EAEBEC"}`, background: form.type === t ? "#EBF3FF" : "#FFF", color: form.type === t ? "#0066FF" : "#17171999" }}>
                        <span className="body-body-14regular">{t}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="body-body-14mdeium" style={{ color: "#171719" }}>임직원 규모</label>
                  <select value={form.headcount} onChange={(e) => setForm({ ...form, headcount: e.target.value })} className="h-[48px] px-[14px] rounded-[8px] outline-none cursor-pointer" style={{ border: "1px solid #EAEBEC", background: "#FFF", color: form.headcount ? "#171719" : "#17171973" }}>
                    <option value="">선택해 주세요</option>
                    <option value="~100명">~100명</option>
                    <option value="101~500명">101~500명</option>
                    <option value="501~1000명">501~1000명</option>
                    <option value="1001명~">1001명 이상</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="body-body-14mdeium" style={{ color: "#171719" }}>문의 내용</label>
                  <textarea placeholder="도입 관련 궁금한 점이나 요구사항을 자유롭게 남겨주세요." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="px-[14px] py-[12px] rounded-[8px] outline-none resize-none" style={{ border: "1px solid #EAEBEC", background: "#FFF", color: "#171719" }} />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="flex items-start gap-[10px] cursor-pointer">
                    <input type="checkbox" checked={form.agreed} onChange={(e) => { setForm({ ...form, agreed: e.target.checked }); setErrors({ ...errors, agreed: "" }); }} className="mt-[2px]" style={{ accentColor: "#0066FF", width: 16, height: 16 }} />
                    <span className="body-body-14regular" style={{ color: "#17171999" }}>
                      <span style={{ color: "#171719" }}>개인정보 수집 및 이용</span>에 동의합니다. <span style={{ color: "#FF3B30" }}>*</span>
                      <br /><span className="body-body-12regular" style={{ color: "#17171973" }}>수집 항목: 성명, 이메일, 연락처, 회사명 / 보관 기간: 문의 처리 완료 후 6개월</span>
                    </span>
                  </label>
                  {errors.agreed && <span className="body-body-12regular" style={{ color: "#FF3B30" }}>{errors.agreed}</span>}
                </div>
                <button type="submit" className="flex items-center justify-center h-[52px] px-[32px] rounded-[8px] cursor-pointer mt-[8px]" style={{ background: "#0066FF", color: "#fff" }}>
                  <span className="body-body-16medium">문의 제출하기</span>
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center gap-[24px] py-[64px] rounded-[16px] text-center" style={{ background: "#F7F7F8" }}>
                <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full" style={{ background: "#EBFAF0" }}>
                  <CheckCircle size={36} style={{ color: "#00BF40" }} />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h2 className="heading-heading-24bold" style={{ color: "#171719" }}>문의가 접수되었습니다!</h2>
                  <p className="body-body-16regular" style={{ color: "#17171999" }}>담당자가 영업일 기준 1~2일 내 <strong>{form.email}</strong>로 연락드리겠습니다.</p>
                </div>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", type: "", headcount: "", message: "", agreed: false }); }} className="h-[48px] px-[28px] rounded-[8px] cursor-pointer border" style={{ borderColor: "#E1E2E4", background: "#FFF", color: "#171719" }}>
                  <span className="body-body-16medium">다시 문의하기</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
