"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group transition-all hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-primary font-comfortaa">
            Pregnant
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 font-varela-round">
          <Link href="/timeline" className="transition-colors hover:text-primary">
            Thai kỳ
          </Link>
          <Link href="/nutrition" className="transition-colors hover:text-primary">
            Dinh dưỡng
          </Link>
          <Link href="/nutrients" className="transition-colors hover:text-primary">
            Dưỡng chất
          </Link>
          <Link href="/journal" className="transition-colors hover:text-primary">
            Nhật ký
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/admin" 
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 active:scale-95"
          >
            Theo dõi ngay
          </Link>
        </div>
      </div>
    </header>
  );
}
