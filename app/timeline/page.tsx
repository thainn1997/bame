"use client";

import Header from "@/components/layout/Header";
import { ChevronRight, Baby, Info, CheckCircle2, ListFilter } from "lucide-react";
import { useState, useEffect } from "react";

const weeks = Array.from({ length: 40 }, (_, i) => ({
  number: i + 1,
  title: `Tuần thứ ${i + 1}`,
  size: i < 4 ? "Hạt vừng" : i < 8 ? "Quả nho" : i < 12 ? "Quả chanh" : i < 16 ? "Quả bơ" : i < 20 ? "Quả chuối" : "Quả dưa hấu",
  momChange: "Cơ thể bắt đầu thích nghi với sự thay đổi nội tiết tố.",
  babyDev: "Hình thành các cơ quan quan trọng đầu tiên.",
  status: i < 12 ? "completed" : i === 12 ? "current" : "upcoming",
}));

export default function TimelinePage() {
  const [activeWeek, setActiveWeek] = useState(13); // Default to current week

  const scrollToWeek = (weekNum: number) => {
    const element = document.getElementById(`week-${weekNum}`);
    if (element) {
      const offset = 160; // Offset for sticky header + week selector
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveWeek(weekNum);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-varela-round">
      <Header />
      
      {/* Sticky Week Selector */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-pink-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary font-bold whitespace-nowrap">
            <ListFilter size={20} />
            <span className="hidden sm:inline">Chọn tuần:</span>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto py-2 no-scrollbar">
            {weeks.map((week) => (
              <button
                key={week.number}
                onClick={() => scrollToWeek(week.number)}
                className={`flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                  activeWeek === week.number
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110"
                    : "bg-white text-zinc-400 hover:text-primary hover:bg-pink-50 border border-zinc-100"
                }`}
              >
                {week.number}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-comfortaa text-zinc-900">Lộ Trình Thai Kỳ</h1>
            <p className="text-zinc-500 max-w-xl mx-auto">Hành trình 40 tuần kỳ diệu của mẹ và bé yêu. Theo dõi từng bước phát triển mỗi ngày.</p>
          </div>

          {/* Timeline View */}
          <div className="relative space-y-12 pt-10">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-pink-100 -translate-x-1/2 hidden md:block" />

            {weeks.map((week, i) => (
              <div 
                key={week.number} 
                id={`week-${week.number}`}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} scroll-mt-40`}
              >
                {/* Dot */}
                <div className={`absolute left-8 md:left-1/2 h-6 w-6 rounded-full border-4 border-white shadow-md z-10 -translate-x-1/2 ${week.status === 'completed' ? 'bg-primary' : week.status === 'current' ? 'bg-primary animate-pulse' : 'bg-zinc-200'}`} />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-40px)]">
                  <div className={`bg-white p-8 rounded-[32px] shadow-sm border transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${week.status === 'current' ? 'border-primary shadow-lg shadow-primary/10 scale-[1.02]' : 'border-zinc-50'}`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center font-bold text-lg ${week.status === 'completed' ? 'bg-primary text-white' : week.status === 'current' ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                          {week.number}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-zinc-900 font-comfortaa">{week.title}</h3>
                          <div className="text-primary text-sm font-semibold text-wrap">Kích thước: {week.size}</div>
                        </div>
                      </div>
                      {week.status === 'completed' && <CheckCircle2 className="text-green-400" />}
                    </div>

                    <div className="space-y-4 text-sm leading-relaxed">
                      <div className="flex gap-3">
                        <div className="mt-1 text-primary shrink-0"><Baby size={18} /></div>
                        <div>
                          <span className="font-bold text-zinc-700">Bé yêu: </span>
                          <span className="text-zinc-500">{week.babyDev}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-1 text-primary shrink-0"><Info size={18} /></div>
                        <div>
                          <span className="font-bold text-zinc-700">Mẹ bầu: </span>
                          <span className="text-zinc-500">{week.momChange}</span>
                        </div>
                      </div>
                    </div>

                    <button className={`w-full mt-8 py-3 rounded-2xl font-bold transition-colors ${week.status === 'upcoming' ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed' : 'bg-pink-50 text-primary hover:bg-primary hover:text-white'}`}>
                      Xem chi tiết {week.status === 'upcoming' ? '(Sắp tới)' : ''}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
