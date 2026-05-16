import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { 
  ArrowRight, 
  CheckCircle2, 
  Baby, 
  UtensilsCrossed, 
  AlertTriangle,
  ChevronRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 bg-gradient-to-br from-white via-pink-50/50 to-white">
          <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4">
            <div className="h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-50" />
          </div>
          <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/4 translate-y-1/4">
            <div className="h-96 w-96 rounded-full bg-accent/30 blur-3xl opacity-30" />
          </div>

          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-primary font-semibold text-sm animate-fade-in">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Đồng hành cùng mẹ bầu mỗi ngày
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold font-comfortaa leading-[1.1] text-zinc-900">
                  Đồng hành cùng mẹ trong suốt <span className="text-primary">hành trình mang thai</span>
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-600 font-varela-round max-w-xl mx-auto lg:mx-0">
                  Theo dõi từng tuần thai kỳ, chế độ dinh dưỡng và dưỡng chất cần thiết cho sức khỏe của cả mẹ và bé yêu.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link 
                    href="/admin" 
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-3xl font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    Bắt đầu miễn phí <ArrowRight size={20} />
                  </Link>
                  <Link 
                    href="/timeline" 
                    className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-700 border border-zinc-200 rounded-3xl font-bold text-lg hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
                  >
                    Xem roadmap thai kỳ
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] md:h-[500px] flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square bg-pink-200/20 rounded-[40px] flex items-center justify-center overflow-hidden animate-float">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                  <Baby size={200} className="text-primary/40" />
                  {/* Floating elements would be images in a real app */}
                  <div className="absolute top-10 right-10 p-4 bg-white rounded-2xl shadow-xl animate-bounce-subtle">
                    <CheckCircle2 className="text-green-400" />
                  </div>
                  <div className="absolute bottom-10 left-10 p-4 bg-white rounded-2xl shadow-xl animate-bounce-slow">
                    <UtensilsCrossed className="text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Preview */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-comfortaa text-zinc-900">Roadmap Thai Kỳ 40 Tuần</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">Từng bước quan sát sự phát triển của bé và thay đổi của mẹ</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { week: "Tuần 1-4", title: "Hình thành", desc: "Giai đoạn bắt đầu sự sống diệu kỳ", status: "completed" },
                { week: "Tuần 5-8", title: "Phát triển tim", desc: "Bé bắt đầu có nhịp đập đầu tiên", status: "current" },
                { week: "Tuần 9-12", title: "Hoàn thiện cơ bản", desc: "Các bộ phận chính đã hình thành", status: "upcoming" },
                { week: "Tuần 13-16", title: "Tam cá nguyệt thứ 2", desc: "Mẹ bắt đầu cảm nhận được bé", status: "upcoming" },
              ].map((item, i) => (
                <div key={i} className="group p-8 bg-white rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-2">
                  <div className="text-primary font-bold text-sm mb-2 uppercase tracking-wider">{item.week}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 font-comfortaa">{item.title}</h3>
                  <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <Link href="/timeline" className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Xem chi tiết <ChevronRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-primary/5 rounded-[48px] p-8 md:p-16 overflow-hidden relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold font-comfortaa text-zinc-900">Dinh dưỡng vàng cho mẹ</h2>
                  <p className="text-zinc-600 leading-relaxed">
                    Chúng tôi cung cấp lộ trình dinh dưỡng được cá nhân hóa, giúp mẹ bổ sung đầy đủ Sắt, Canxi, DHA và các vitamin thiết yếu.
                  </p>
                  <ul className="space-y-4">
                    {["Gợi ý thực đơn theo ngày", "Nhắc nhở uống vitamin", "Cảnh báo thực phẩm cần tránh"].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <CheckCircle2 size={16} />
                        </div>
                        {text}
                      </li>
                    ))}
                  </ul>
                  <button className="px-8 py-3.5 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20">
                    Khám phá dinh dưỡng
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Sắt", color: "bg-red-50", icon: "🥩" },
                    { title: "Canxi", color: "bg-blue-50", icon: "🥛" },
                    { title: "DHA", color: "bg-yellow-50", icon: "💊" },
                    { title: "Acid Folic", color: "bg-green-50", icon: "🥬" },
                  ].map((item, i) => (
                    <div key={i} className={`p-6 ${item.color} rounded-3xl flex flex-col items-center justify-center text-center space-y-2 hover:scale-105 transition-all cursor-pointer`}>
                      <span className="text-3xl">{item.icon}</span>
                      <span className="font-bold text-zinc-800">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-zinc-400 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Baby size={18} />
                </div>
                <span className="text-2xl font-bold text-white font-comfortaa">Pregnant</span>
              </div>
              <p className="max-w-sm leading-relaxed">
                Ứng dụng đồng hành cùng mẹ bầu trong suốt 40 tuần thai kỳ diệu kỳ. Cung cấp kiến thức và công cụ theo dõi sức khỏe tốt nhất.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Liên kết</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link></li>
                <li><Link href="/timeline" className="hover:text-primary transition-colors">Lộ trình</Link></li>
                <li><Link href="/nutrition" className="hover:text-primary transition-colors">Dinh dưỡng</Link></li>
                <li><Link href="/notes" className="hover:text-primary transition-colors">Ghi chú</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Liên hệ</h4>
              <ul className="space-y-4 text-sm">
                <li>Email: hello@pregnant.app</li>
                <li>Hotline: 1900 xxxx</li>
                <li>Địa chỉ: Hà Nội, Việt Nam</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800 text-sm text-center">
            © {new Date().getFullYear()} Pregnant App. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
