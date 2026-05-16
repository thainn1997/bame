import Header from "@/components/layout/Header";
import { Pill, ShieldCheck, Zap, Heart, CheckCircle2 } from "lucide-react";

const nutrients = [
  {
    name: "Sắt (Iron)",
    role: "Ngăn ngừa thiếu máu, cung cấp oxy cho thai nhi",
    dosage: "27 - 30mg/ngày",
    tips: "Uống kèm nước cam để hấp thụ tốt hơn. Tránh uống cùng canxi.",
    color: "bg-red-50",
    icon: <Zap className="text-red-500" />
  },
  {
    name: "Canxi",
    role: "Phát triển xương, răng và hệ thần kinh cho bé",
    dosage: "1000 - 1200mg/ngày",
    tips: "Nên uống vào buổi sáng. Chia nhỏ liều lượng nếu cần bổ sung nhiều.",
    color: "bg-blue-50",
    icon: <ShieldCheck className="text-blue-500" />
  },
  {
    name: "DHA",
    role: "Phát triển não bộ và võng mạc cho bé",
    dosage: "200mg/ngày",
    tips: "Uống trong hoặc ngay sau bữa ăn có chất béo.",
    color: "bg-orange-50",
    icon: <Pill className="text-orange-500" />
  },
  {
    name: "Acid Folic",
    role: "Ngừa dị tật ống thần kinh, hỗ trợ phân chia tế bào",
    dosage: "400 - 600mcg/ngày",
    tips: "Cần thiết nhất trong 3 tháng đầu thai kỳ.",
    color: "bg-green-50",
    icon: <Heart className="text-green-500" />
  },
];

export default function NutrientsPage() {
  return (
    <div className="min-h-screen bg-white font-varela-round">
      <Header />
      
      <main className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-comfortaa text-zinc-900">Dưỡng Chất Thiết Yếu</h1>
            <p className="text-zinc-500 max-w-xl mx-auto">Danh sách các vi chất không thể thiếu để mẹ khỏe mạnh và bé phát triển toàn diện.</p>
          </div>

          <div className="space-y-6">
            {nutrients.map((item, i) => (
              <div key={i} className={`${item.color} rounded-[32px] p-8 border border-zinc-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-all`}>
                <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h2 className="text-2xl font-bold text-zinc-900 font-comfortaa">{item.name}</h2>
                    <span className="px-4 py-1 bg-white rounded-full text-xs font-bold text-zinc-500 shadow-sm">
                      Liều lượng: {item.dosage}
                    </span>
                  </div>
                  <p className="text-zinc-600 font-medium">{item.role}</p>
                  <div className="bg-white/50 p-6 rounded-2xl border border-white/50">
                    <div className="flex items-center gap-2 mb-2 text-zinc-800 font-bold text-sm">
                      <CheckCircle2 size={16} className="text-primary" />
                      Lời khuyên bổ sung:
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reminder CTA */}
          <div className="bg-primary p-10 rounded-[48px] text-white text-center space-y-6 shadow-2xl shadow-primary/20">
            <h2 className="text-3xl font-bold font-comfortaa">Mẹ sợ quên uống dưỡng chất?</h2>
            <p className="text-white/80 max-w-md mx-auto">Hãy để chúng tôi nhắc nhở mẹ mỗi ngày qua thông báo trên điện thoại.</p>
            <button className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              Cài đặt nhắc nhở ngay
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
