"use client";

import { useState } from "react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";
import Input from "@/components/admin/ui/Input";

export default function ChangePasswordForm() {

  const [oldPassword, setOldPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);
      const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!oldPassword) {
      toast.error(
        "Vui lòng nhập mật khẩu cũ."
      );
      return;
    }

    if (!newPassword) {
      toast.error(
        "Vui lòng nhập mật khẩu mới."
      );
      return;
    }

    if (newPassword.length < 6) {
      toast.error(
        "Mật khẩu phải từ 6 ký tự."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error(
        "Xác nhận mật khẩu không khớp."
      );
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "/api/admin/change-password",
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            oldPassword,
            newPassword,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      toast.success(
        "Đổi mật khẩu thành công."
      );

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error(error);

      toast.error(
        "Có lỗi xảy ra."
      );
    } finally {
      setLoading(false);
    }
  };
    return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-6"
    >

      <Input
        label="Mật khẩu cũ"
        type="password"
        required
        value={oldPassword}
        onChange={(e) =>
          setOldPassword(e.target.value)
        }
      />

      <Input
        label="Mật khẩu mới"
        type="password"
        required
        value={newPassword}
        onChange={(e) =>
          setNewPassword(e.target.value)
        }
      />

      <Input
        label="Xác nhận mật khẩu"
        type="password"
        required
        value={confirmPassword}
        onChange={(e) =>
          setConfirmPassword(e.target.value)
        }
      />

      <div className="flex justify-end">

        <Button
          type="submit"
          loading={loading}
        >
          Đổi mật khẩu
        </Button>

      </div>

    </form>
  );
}