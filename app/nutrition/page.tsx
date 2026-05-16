import Header from "@/components/layout/Header";
import { Utensils, Apple, Fish, Wheat, CheckCircle2, AlertCircle } from "lucide-react";

const nutritionData = [
  { 
    title: "Sắt (Iron)", 
    desc: "Cần thiết cho việc tạo máu và cung cấp oxy cho thai nhi.", 
    sources: "Thịt đỏ, tiết, gan, các loại đậu, rau lá xanh đậm.",
    amount: "27mg / ngày",
    icon: <Utensils className="text-red-500" />
  },
  { 
    title: "Canxi (Calcium)", 
    desc: "Xây dựng khung xương và răng chắc khỏe cho bé.", 
    sources: "Sữa, phô mai, sữa chua, tôm đồng, các loại hạt.",
    amount: "1000 - 1200mg / ngày",
    icon: <Apple className="text-blue-500" />
  },
  { 
    title: "DHA / Omega-3", 
    desc: "Phát triển não bộ và thị giác của thai nhi.", 
    sources: "Cá hồi, trứng, hạt óc chó, dầu cá.",
    amount: "200mg / ngày",
    icon: <Fish className="text-orange-500" />
  },
  { 
    title: "Acid Folic", 
    desc: "Phòng ngừa dị tật ống thần kinh ở thai nhi.", 
    sources: "Rau chân vịt, súp lơ, ngũ cốc, nước cam.",
    amount: "400 - 600mcg / ngày",
    icon: <Wheat className="text-green-500" />
  },
];

export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-varela-round">
      <Header />
      
      <main className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-comfortaa text-zinc-900">Dinh Dưỡng Cho Mẹ Bầu</h1>
            <p className="text-zinc-500 max-w-xl mx-auto">Chế độ ăn uống khoa học là chìa khóa cho sự phát triển khỏe mạnh của bé yêu.</p>
          </div>

          {/* Core Nutrients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nutritionData.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-zinc-900 font-comfortaa">{item.title}</h3>
                    <div className="text-primary text-sm font-semibold">Lượng khuyên dùng: {item.amount}</div>
                  </div>
                </div>
                <p className="text-zinc-600 mb-6 leading-relaxed">{item.desc}</p>
                <div className="bg-zinc-50 p-4 rounded-2xl">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">Nguồn thực phẩm:</span>
                  <p className="text-zinc-700 text-sm">{item.sources}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Things to Avoid */}
          <div className="bg-red-50 rounded-[48px] p-8 md:p-16 border border-red-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-comfortaa text-red-900">Thực phẩm cần tránh</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Caffeine", desc: "Hạn chế dưới 200mg/ngày", icon: "☕" },
                { title: "Đồ sống", desc: "Tránh gỏi, cá sống, trứng tái", icon: "🍣" },
                { title: "Sữa chưa tiệt trùng", desc: "Nguy cơ nhiễm khuẩn Listeria", icon: "🥛" },
                { title: "Rượu bia", desc: "Tuyệt đối không sử dụng", icon: "🍷" },
              ].map((item, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-[28px] space-y-2 border border-red-200/50">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="font-bold text-red-900">{item.title}</h4>
                  <p className="text-red-700/70 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Menu Suggestion */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold font-comfortaa text-zinc-900 text-center">Gợi ý thực đơn hôm nay</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { meal: "Bữa sáng", time: "07:30", items: ["Phở bò", "1 ly nước cam"], icon: "🥣" },
                { meal: "Bữa trưa", time: "12:00", items: ["Cơm gạo lứt", "Cá hồi áp chảo", "Canh rau ngót"], icon: "🥗" },
                { meal: "Bữa tối", time: "18:30", items: ["Súp gà ngô non", "1 hũ sữa chua"], icon: "🍲" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {item.icon}
                  </div>
                  <div className="text-primary font-bold text-sm mb-1">{item.time}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-6 font-comfortaa">{item.meal}</h3>
                  <ul className="space-y-3">
                    {item.items.map((food, j) => (
                      <li key={j} className="flex items-center gap-3 text-zinc-600">
                        <CheckCircle2 size={16} className="text-primary" />
                        {food}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
