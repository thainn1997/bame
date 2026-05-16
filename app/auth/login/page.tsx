"use client";

import Link from "next/link";
import { Heart, Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/admin");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-50 p-6 font-varela-round">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-[48px] shadow-2xl shadow-primary/10 border border-pink-50">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary text-white shadow-xl shadow-primary/30 mb-4 hover:scale-110 transition-transform">
            <Heart size={32} fill="currentColor" />
          </Link>
          <h1 className="text-3xl font-bold font-comfortaa text-zinc-900 tracking-tight">Mừng mẹ trở lại!</h1>
          <p className="text-zinc-500">Đăng nhập để vào trang quản trị của mẹ.</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 ml-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                required
                type="email" 
                placeholder="mebau@example.com" 
                className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 ml-2">Mật khẩu</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                required
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Link href="/auth/forgot-password" className="text-sm font-bold text-primary hover:underline">
              Quên mật khẩu?
            </Link>
          </div>

          <button 
            disabled={isSubmitting}
            type="submit"
            className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Đang xử lý..." : "Đăng nhập"} <ArrowRight size={20} />
          </button>
        </form>

        <div className="text-center pt-4">
          <p className="text-zinc-500 text-sm">
            Mẹ chưa có tài khoản?{" "}
            <Link href="/auth/register" className="font-bold text-primary hover:underline">
              Tham gia ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
