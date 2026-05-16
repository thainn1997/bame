"use client";

import Sidebar from "@/components/layout/Sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for dummy token in localStorage
    const token = localStorage.getItem("isLoggedIn");
    if (!token) {
      router.push("/auth/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-comfortaa">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-primary font-bold">Đang kiểm tra quyền truy cập...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-zinc-50 font-varela-round">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-30 h-16 border-b border-pink-50 bg-white/80 backdrop-blur-md lg:hidden">
          <div className="flex h-full items-center px-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary font-comfortaa">Pregnant</span>
              <span className="text-xs bg-pink-100 text-primary px-2 py-0.5 rounded-full font-bold">Admin</span>
            </Link>
          </div>
        </header>
        <div className="p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
