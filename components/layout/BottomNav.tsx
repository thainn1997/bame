"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Utensils, FileText, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { name: "Home", href: "/", icon: Home },
  { name: "Lộ trình", href: "/timeline", icon: Calendar },
  { name: "Dinh dưỡng", href: "/nutrition", icon: Utensils },
  { name: "Nhật ký", href: "/notes", icon: FileText },
  { name: "Tôi", href: "/profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-pink-50 lg:hidden px-2 pb-safe">
      <div className="flex items-center justify-around h-16">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-full h-full transition-all",
                isActive ? "text-primary scale-110" : "text-zinc-400"
              )}
            >
              <div className={cn(
                "p-1 rounded-xl transition-all",
                isActive && "bg-primary/10"
              )}>
                <Icon size={20} fill={isActive ? "currentColor" : "none"} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

