"use client";

import { useState } from "react";
import { 
  Droplets, 
  Moon, 
  Smile, 
  Scale, 
  ChevronRight,
  Plus,
  Bell
} from "lucide-react";

export default function DashboardPage() {
  const [water, setWater] = useState(1.5);
  const [tasks, setTasks] = useState([
    { title: "Bổ sung Sắt & Acid Folic", time: "08:00 AM", status: "done" },
    { title: "Đi bộ nhẹ nhàng 20 phút", time: "05:00 PM", status: "pending" },
    { title: "Uống 1 cốc sữa ấm", time: "09:00 PM", status: "pending" },
    { title: "Đọc sách cho bé nghe", time: "09:30 PM", status: "pending" },
  ]);

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].status = newTasks[index].status === 'done' ? 'pending' : 'done';
    setTasks(newTasks);
  };

  const addWater = () => {
    if (water < 2.5) setWater(prev => Math.min(prev + 0.25, 2.5));
  };

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 font-comfortaa">Chào mẹ bầu! ❤️</h1>
          <p className="text-zinc-500 mt-1">Hôm nay là tuần thứ 12 của thai kỳ. Chúc mẹ một ngày tốt lành!</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="h-12 w-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-primary transition-colors shadow-sm">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-2xl border border-zinc-100 shadow-sm">
            <div className="h-8 w-8 rounded-xl bg-pink-100" />
            <span className="font-semibold text-zinc-700 text-sm">Nguyễn Thu Hà</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Water Widget */}
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-50 flex flex-col items-center text-center space-y-4">
          <div className="h-16 w-16 rounded-3xl bg-blue-50 text-blue-500 flex items-center justify-center">
            <Droplets size={32} />
          </div>
          <div>
            <div className="text-2xl font-bold text-zinc-900">{water} / 2.5 L</div>
            <div className="text-zinc-400 text-sm">Nước uống</div>
          </div>
          <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-blue-400 h-full transition-all duration-500 rounded-full" 
              style={{ width: `${(water / 2.5) * 100}%` }} 
            />
          </div>
          <button 
            onClick={addWater}
            className="h-10 w-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Sleep Widget */}
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-50 flex flex-col items-center text-center space-y-4">
          <div className="h-16 w-16 rounded-3xl bg-indigo-50 text-indigo-500 flex items-center justify-center">
            <Moon size={32} />
          </div>
          <div>
            <div className="text-2xl font-bold text-zinc-900">8.5 Giờ</div>
            <div className="text-zinc-400 text-sm">Giấc ngủ</div>
          </div>
          <div className="text-green-500 text-xs font-semibold px-3 py-1 bg-green-50 rounded-full">Tốt hơn hôm qua</div>
        </div>

        {/* Mood Widget */}
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-50 flex flex-col items-center text-center space-y-4">
          <div className="h-16 w-16 rounded-3xl bg-pink-50 text-primary flex items-center justify-center">
            <Smile size={32} />
          </div>
          <div>
            <div className="text-2xl font-bold text-zinc-900">Hạnh phúc</div>
            <div className="text-zinc-400 text-sm">Tâm trạng</div>
          </div>
          <div className="flex gap-2">
            {["😢", "😐", "😊", "😍"].map((emoji, i) => (
              <button key={i} className={`h-8 w-8 rounded-lg flex items-center justify-center transition-all ${i === 2 ? 'bg-pink-100 shadow-inner' : 'hover:bg-pink-50 hover:scale-110'}`}>
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Weight Widget */}
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-50 flex flex-col items-center text-center space-y-4">
          <div className="h-16 w-16 rounded-3xl bg-orange-50 text-orange-500 flex items-center justify-center">
            <Scale size={32} />
          </div>
          <div>
            <div className="text-2xl font-bold text-zinc-900">54.2 Kg</div>
            <div className="text-zinc-400 text-sm">Cân nặng</div>
          </div>
          <div className="text-zinc-400 text-xs">+1.2 kg so với tuần trước</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20 lg:pb-0">
        {/* Checklist */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 font-comfortaa">Việc cần làm hôm nay</h2>
          <div className="bg-white rounded-[32px] border border-zinc-50 shadow-sm divide-y divide-zinc-50 overflow-hidden">
            {tasks.map((task, i) => (
              <div 
                key={i} 
                onClick={() => toggleTask(i)}
                className="flex items-center justify-between p-6 group hover:bg-pink-50/30 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${task.status === 'done' ? 'bg-primary border-primary text-white scale-110' : 'border-zinc-200 group-hover:border-primary'}`}>
                    {task.status === 'done' && <Smile size={14} />}
                  </div>
                  <div>
                    <div className={`font-semibold transition-all ${task.status === 'done' ? 'text-zinc-400 line-through opacity-50' : 'text-zinc-700'}`}>{task.title}</div>
                    <div className="text-zinc-400 text-xs">{task.time}</div>
                  </div>
                </div>
                <button className="text-zinc-300 group-hover:text-primary transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Tip */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 font-comfortaa">Mẹo tuần này</h2>
          <div className="bg-gradient-to-br from-primary to-pink-400 p-8 rounded-[32px] text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-32 w-32 rounded-full bg-white/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm mb-6">
                <Smile size={24} />
              </div>
              <h3 className="text-xl font-bold font-comfortaa italic">"Cơ thể mẹ đang làm việc tuyệt vời!"</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Tuần này bé đã có kích thước bằng quả chanh rồi đấy mẹ ạ. Mẹ hãy chú ý bổ sung thêm Vitamin C để tăng cường đề kháng nhé.
              </p>
              <button className="w-full py-3 bg-white text-primary rounded-2xl font-bold shadow-lg mt-4 hover:bg-pink-50 transition-colors">
                Xem chi tiết tuần 12
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
