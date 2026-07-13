"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message);

        setLoading(false);

        return;
      }

      toast.success("Đăng nhập thành công");

      router.push("/admin");
    } catch {
      toast.error("Có lỗi xảy ra");
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f5f2] p-8">

      <div className="w-full max-w-md rounded-[32px] bg-white p-10 shadow-2xl">

        <p className="text-center text-xs uppercase tracking-[5px] text-[#c8a86b]">
          DO WEDDING
        </p>

        <h1 className="mt-4 text-center text-4xl font-light">
          Admin Login
        </h1>

        <div className="mt-10 space-y-6">

          <div className="relative">
            <User
              size={18}
              className="absolute left-5 top-5 text-gray-400"
            />

            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="h-14 w-full rounded-full border pl-14 pr-6 outline-none"
            />
          </div>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-5 top-5 text-gray-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="h-14 w-full rounded-full border pl-14 pr-6 outline-none"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="h-14 w-full rounded-full bg-[#c8a86b] font-medium text-white transition hover:bg-[#b79559]"
          >
            {loading ? "ĐANG ĐĂNG NHẬP..." : "ĐĂNG NHẬP"}
          </button>

        </div>

      </div>

    </main>
  );
}