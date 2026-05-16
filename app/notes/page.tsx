import Header from "@/components/layout/Header";
import { Plus, Search, Calendar, MoreVertical, Heart, Edit3 } from "lucide-react";

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-varela-round">
      <Header />
      
      <main className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h1 className="text-4xl font-bold font-comfortaa text-zinc-900">Nhật Ký Mẹ Bầu</h1>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              <Plus size={20} /> Viết nhật ký mới
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                type="text" 
                placeholder="Tìm kiếm ghi chú..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <button className="px-4 bg-white border border-zinc-100 rounded-2xl text-zinc-400 hover:text-primary transition-colors">
              <Calendar size={20} />
            </button>
          </div>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "Lần đầu con máy", 
                date: "16 Tháng 5, 2026", 
                preview: "Hôm nay mình cảm nhận được một chuyển động nhỏ như cánh bướm chạm nhẹ...", 
                tag: "Cảm xúc",
                color: "bg-pink-50"
              },
              { 
                title: "Kết quả siêu âm tuần 12", 
                date: "10 Tháng 5, 2026", 
                preview: "Bác sĩ nói bé phát triển rất tốt, tim thai đập đều 150 nhịp/phút. Mừng quá!", 
                tag: "Sức khỏe",
                color: "bg-blue-50"
              },
              { 
                title: "Danh sách đồ dùng cần mua", 
                date: "05 Tháng 5, 2026", 
                preview: "- Quần áo sơ sinh\n- Tã vải\n- Sữa tắm dịu nhẹ...", 
                tag: "Chuẩn bị",
                color: "bg-yellow-50"
              },
              { 
                title: "Thèm ăn món chua", 
                date: "01 Tháng 5, 2026", 
                preview: "Dạo này mình cực kỳ thích ăn xoài xanh và các món chua ngọt. Bố nó cứ trêu mãi.", 
                tag: "Dinh dưỡng",
                color: "bg-green-50"
              },
            ].map((note, i) => (
              <div key={i} className="bg-white p-6 rounded-[32px] border border-zinc-50 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                <div className={`absolute top-0 right-0 h-24 w-24 ${note.color} blur-3xl -z-0 opacity-50`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${note.color.replace('bg-', 'text-').replace('-50', '-500')} ${note.color}`}>
                      {note.tag}
                    </span>
                    <button className="text-zinc-300 hover:text-primary transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-2 font-comfortaa group-hover:text-primary transition-colors">{note.title}</h3>
                  <div className="text-zinc-400 text-xs mb-4 flex items-center gap-1">
                    <Calendar size={12} /> {note.date}
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                    {note.preview}
                  </p>
                  <div className="mt-6 pt-4 border-t border-zinc-50 flex items-center justify-between text-zinc-300">
                    <div className="flex gap-2">
                      <Heart size={16} />
                      <Edit3 size={16} />
                    </div>
                    <button className="text-xs font-bold text-primary hover:underline">Đọc thêm</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
