"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Home, 
  Calendar, 
  Utensils, 
  FileText, 
  User, 
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Tổng quan", href: "/admin", icon: Home },
  { name: "Lộ trình", href: "/timeline", icon: Calendar },
  { name: "Dinh dưỡng", href: "/nutrition", icon: Utensils },
  { name: "Ghi chú", href: "/notes", icon: FileText },
  { name: "Hồ sơ", href: "/profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  return (
    <aside className="hidden lg:flex h-screen w-72 flex-col border-r border-pink-50 bg-white p-6 sticky top-0 font-varela-round">
      <div className="flex items-center gap-3 mb-10 px-2">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Home size={18} />
          </div>
          <span className="text-xl font-bold text-primary font-comfortaa tracking-tight group-hover:opacity-80 transition-opacity">Pregnant</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]" 
                  : "text-zinc-500 hover:bg-pink-50 hover:text-primary"
              )}
            >
              <Icon size={20} className={cn(isActive ? "text-white" : "group-hover:text-primary")} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-2">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-zinc-500 hover:bg-pink-50 hover:text-primary transition-all"
        >
          <Settings size={20} />
          <span className="font-medium">Cài đặt</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-red-400 hover:bg-red-50 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}
