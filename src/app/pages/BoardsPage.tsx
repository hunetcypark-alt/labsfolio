import { useState } from "react";
import { Plus, Link2, Eye, Calendar, MoreHorizontal, Trash2, Edit, X } from "lucide-react";
import { useNavigate } from "react-router";
import { MOCK_BOARDS, MOCK_DESIGNS } from "../data/mockData";

const STATUS_CONFIG = { active: { label: "활성", bg: "#EBFAF0", text: "#00BF40" }, expired: { label: "만료", bg: "#F7F7F8", text: "#17171973" }, inactive: { label: "비활성", bg: "#FEF0EF", text: "#FF3B30" } };

export function BoardsPage() {
  const navigate = useNavigate();
  const [boards, setBoards] = useState(MOCK_BOARDS);
  const [createOpen, setCreateOpen] = useState(false);
  const [newBoard, setNewBoard] = useState({ title: "", clientName: "", description: "" });
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const handleCreate = () => {
    if (!newBoard.title || !newBoard.clientName) return;
    const created = { id: `b-${Date.now()}`, title: newBoard.title, clientName: newBoard.clientName, description: newBoard.description, items: [], shareLinks: [], createdAt: new Date().toISOString().split("T")[0], createdBy: "user-2" };
    setBoards([created, ...boards]);
    setNewBoard({ title: "", clientName: "", description: "" });
    setCreateOpen(false);
    navigate(`/boards/${created.id}`);
  };
  const handleDelete = (id: string) => { setBoards(boards.filter((b) => b.id !== id)); setMenuOpenId(null); };
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div className="flex items-center justify-between px-[24px] py-[16px] border-b sticky top-0 z-10" style={{ borderColor: "#EAEBEC", background: "#FFF" }}>
        <div className="flex flex-col gap-[2px]"><h1 className="heading-heading-20bold" style={{ color: "#171719" }}>레퍼런스 보드</h1><p className="body-body-14regular" style={{ color: "#17171999" }}>고객사별 맞춤 레퍼런스 보드를 관리하세요.</p></div>
        <button onClick={() => setCreateOpen(true)} className="flex items-center gap-[6px] h-[40px] px-[16px] rounded-[8px] cursor-pointer" style={{ background: "#0066FF", color: "#fff" }}><Plus size={16} /><span className="body-body-14mdeium">새 보드 만들기</span></button>
      </div>
      <div className="p-[24px]">
        {boards.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-[96px] rounded-[16px]" style={{ background: "#F7F7F8" }}>
            <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full mb-[16px]" style={{ background: "#EBF3FF" }}><Link2 size={28} style={{ color: "#0066FF" }} /></div>
            <p className="heading-heading-18bold" style={{ color: "#17171999" }}>레퍼런스 보드가 없습니다</p><p className="body-body-14regular mt-[8px]" style={{ color: "#17171973" }}>새 보드를 만들어 고객사 맞춤 레퍼런스를 구성해 보세요.</p>
            <button onClick={() => setCreateOpen(true)} className="flex items-center gap-[6px] h-[44px] px-[24px] rounded-[8px] cursor-pointer mt-[24px]" style={{ background: "#0066FF", color: "#fff" }}><Plus size={16} /><span className="body-body-14mdeium">새 보드 만들기</span></button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            {boards.map((board) => {
              const latestLink = board.shareLinks[0];
              const statusConfig = latestLink ? STATUS_CONFIG[latestLink.status] : null;
              return (
                <div key={board.id} className="relative flex flex-col rounded-[12px] cursor-pointer transition-all hover:shadow-md" style={{ border: "1px solid #EAEBEC", background: "#FFF" }} onClick={() => navigate(`/boards/${board.id}`)}>
                  <div className="w-full rounded-t-[12px] flex items-center justify-center overflow-hidden" style={{ height: 140, background: "#F7F7F8" }}>
                    {board.items.length > 0 ? (<div className="flex gap-[4px] p-[12px] w-full h-full">{board.items.slice(0, 3).map((item, i) => { const design = MOCK_DESIGNS.find((d) => d.id === item.designId); return design ? (<div key={item.id} className="flex-1 rounded-[6px] overflow-hidden" style={{ opacity: 1 - i * 0.15 }}><img src={design.images[0]} alt="" className="w-full h-full object-cover" /></div>) : null; })}{board.items.length > 3 && (<div className="flex items-center justify-center w-[40px] h-full rounded-[6px] shrink-0" style={{ background: "#EAEBEC" }}><span className="body-body-12medium" style={{ color: "#17171999" }}>+{board.items.length - 3}</span></div>)}</div>) : (<div className="flex flex-col items-center gap-[8px]"><Link2 size={24} style={{ color: "#EAEBEC" }} /><span className="body-body-12regular" style={{ color: "#17171973" }}>시안 없음</span></div>)}
                  </div>
                  <div className="flex flex-col gap-[10px] p-[16px]">
                    <div className="flex items-start justify-between gap-[8px]">
                      <div className="flex flex-col gap-[3px]"><span className="body-body-16bold" style={{ color: "#171719" }}>{board.title}</span><span className="body-body-13regular" style={{ color: "#17171999" }}>{board.clientName}</span></div>
                      <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setMenuOpenId(menuOpenId === board.id ? null : board.id)} className="flex items-center justify-center w-[28px] h-[28px] rounded-[6px] cursor-pointer" style={{ background: "transparent" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#F7F7F8")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}><MoreHorizontal size={16} style={{ color: "#17171999" }} /></button>
                        {menuOpenId === board.id && (<div className="absolute right-0 top-[32px] w-[140px] rounded-[8px] border py-[6px] z-10" style={{ background: "#FFF", borderColor: "#EAEBEC", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}><button onClick={() => { navigate(`/boards/${board.id}`); setMenuOpenId(null); }} className="flex items-center gap-[8px] w-full px-[12px] py-[8px] cursor-pointer" style={{ background: "transparent" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#F7F7F8")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}><Edit size={14} style={{ color: "#17171999" }} /><span className="body-body-13regular" style={{ color: "#171719" }}>편집</span></button><button onClick={() => handleDelete(board.id)} className="flex items-center gap-[8px] w-full px-[12px] py-[8px] cursor-pointer" style={{ background: "transparent" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#FEF0EF")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}><Trash2 size={14} style={{ color: "#FF3B30" }} /><span className="body-body-13regular" style={{ color: "#FF3B30" }}>삭제</span></button></div>)}
                      </div>
                    </div>
                    {board.description && (<p className="body-body-13regular" style={{ color: "#17171999", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{board.description}</p>)}
                    <div className="flex items-center justify-between pt-[10px]" style={{ borderTop: "1px solid #EAEBEC" }}>
                      <div className="flex items-center gap-[12px]"><div className="flex items-center gap-[4px]"><Eye size={13} style={{ color: "#17171973" }} /><span className="body-body-12regular" style={{ color: "#17171973" }}>{board.items.length}개 시안</span></div><div className="flex items-center gap-[4px]"><Calendar size={13} style={{ color: "#17171973" }} /><span className="body-body-12regular" style={{ color: "#17171973" }}>{board.createdAt}</span></div></div>
                      {statusConfig && (<span className="body-body-12medium px-[8px] py-[2px] rounded-[4px]" style={{ background: statusConfig.bg, color: statusConfig.text }}>{statusConfig.label}</span>)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {createOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center p-[24px]" style={{ background: "rgba(0,0,0,0.4)" }} onClick={(e) => { if (e.target === e.currentTarget) setCreateOpen(false); }}><div className="w-full max-w-[440px] rounded-[16px] p-[32px] flex flex-col gap-[20px]" style={{ background: "#FFF" }}><div className="flex items-center justify-between"><h2 className="heading-heading-20bold" style={{ color: "#171719" }}>새 레퍼런스 보드</h2><button onClick={() => setCreateOpen(false)} style={{ background: "transparent" }}><X size={20} style={{ color: "#17171999" }} /></button></div><div className="flex flex-col gap-[14px]"><div className="flex flex-col gap-[6px]"><label className="body-body-14mdeium" style={{ color: "#171719" }}>보드 제목 <span style={{ color: "#FF3B30" }}>*</span></label><input type="text" placeholder="예) A사 맞춤 레퍼런스" value={newBoard.title} onChange={(e) => setNewBoard({ ...newBoard, title: e.target.value })} className="h-[44px] px-[14px] rounded-[8px] outline-none" style={{ border: "1px solid #EAEBEC", background: "#FFF", color: "#171719" }} autoFocus /></div><div className="flex flex-col gap-[6px]"><label className="body-body-14mdeium" style={{ color: "#171719" }}>고객사명 <span style={{ color: "#FF3B30" }}>*</span></label><input type="text" placeholder="예) 주식회사 ABC" value={newBoard.clientName} onChange={(e) => setNewBoard({ ...newBoard, clientName: e.target.value })} className="h-[44px] px-[14px] rounded-[8px] outline-none" style={{ border: "1px solid #EAEBEC", background: "#FFF", color: "#171719" }} /></div><div className="flex flex-col gap-[6px]"><label className="body-body-14mdeium" style={{ color: "#171719" }}>설명 (선택)</label><textarea placeholder="보드에 대한 간단한 메모를 남겨주세요." rows={2} value={newBoard.description} onChange={(e) => setNewBoard({ ...newBoard, description: e.target.value })} className="px-[14px] py-[12px] rounded-[8px] outline-none resize-none" style={{ border: "1px solid #EAEBEC", background: "#FFF", color: "#171719" }} /></div></div><div className="flex items-center gap-[8px]"><button onClick={() => setCreateOpen(false)} className="flex-1 h-[44px] rounded-[8px] cursor-pointer border" style={{ borderColor: "#EAEBEC", background: "#FFF", color: "#171719" }}><span className="body-body-14mdeium">취소</span></button><button onClick={handleCreate} disabled={!newBoard.title || !newBoard.clientName} className="flex-1 h-[44px] rounded-[8px] cursor-pointer" style={{ background: newBoard.title && newBoard.clientName ? "#0066FF" : "#EAEBEC", color: newBoard.title && newBoard.clientName ? "#fff" : "#17171973" }}><span className="body-body-14mdeium">만들기</span></button></div></div></div>)}
    </div>
  );
}
