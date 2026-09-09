"use client";

import PageHeader from "@/components/admin/ui/PageHeader";
import Card from "@/components/admin/ui/Card";

import ChangePasswordForm from "./ChangePasswordForm";

export default function ChangePasswordManager() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Đổi mật khẩu"
        description="Thay đổi mật khẩu quản trị."
      />

      <Card padding="lg">

        <ChangePasswordForm />

      </Card>

    </div>
  );
}