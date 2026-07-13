"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!form.name.trim()) {
      toast.error("Vui lòng nhập họ tên.");
      return false;
    }

    if (!form.phone.trim()) {
      toast.error("Vui lòng nhập số điện thoại.");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Vui lòng nhập email.");
      return false;
    }

    if (!form.message.trim()) {
      toast.error("Vui lòng nhập nội dung.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Có lỗi xảy ra");
      }

      toast.success("Đã gửi yêu cầu thành công!", {
        description:
          "DO Wedding sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);

      toast.error("Gửi thất bại!", {
        description: "Vui lòng thử lại sau.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-[#ece7df]
            bg-white
            p-10
            shadow-[0_30px_80px_rgba(0,0,0,.08)]
          "
        >
          <div className="absolute -top-40 right-0 h-[280px] w-[280px] rounded-full bg-[#c8a86b]/10 blur-[120px]" />

          <div className="relative z-10">
            <p className="text-center text-[11px] uppercase tracking-[5px] text-[#c8a86b]">
              BOOKING
            </p>

            <h2 className="mt-5 text-center text-5xl font-light text-[#222]">
              Đặt Lịch Tư Vấn
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-center leading-8 text-[#777]">
              Điền thông tin dưới đây, đội ngũ DO Wedding sẽ
              liên hệ với bạn trong thời gian sớm nhất.
            </p>

            <div className="mt-12 space-y-7">
              <ContactInput
                label="Họ và tên"
                name="name"
                value={form.name}
                placeholder="Nguyễn Văn A"
                onChange={handleChange}
              />

              <ContactInput
                label="Số điện thoại"
                name="phone"
                value={form.phone}
                placeholder="09xxxxxxxx"
                onChange={handleChange}
              />

              <ContactInput
                label="Email"
                name="email"
                type="email"
                value={form.email}
                placeholder="example@gmail.com"
                onChange={handleChange}
              />

              <ContactTextarea
                value={form.message}
                onChange={handleChange}
              />

              <button
                type="button"
                disabled={loading}
                onClick={handleSubmit}
                className="
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#c8a86b]
                  text-sm
                  font-medium
                  uppercase
                  tracking-[3px]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#b89559]
                  hover:shadow-[0_20px_40px_rgba(200,168,107,.35)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? (
                  "ĐANG GỬI..."
                ) : (
                  <>
                    GỬI THÔNG TIN
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}