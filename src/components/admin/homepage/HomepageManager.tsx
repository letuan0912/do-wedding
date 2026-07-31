"use client";

import Loading from "@/components/admin/ui/Loading";
import Button from "@/components/admin/ui/Button";
import PageHeader from "@/components/admin/ui/PageHeader";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import CounterSection from "./sections/CounterSection";

import useHomepage from "@/hooks/useHomepage";

export default function HomepageManager() {
  const {
    form,
    loading,
    saving,
    save,
    updateField,
  } = useHomepage();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader
        title="Trang chủ"
        description="Quản lý nội dung trang chủ."
        action={
          <Button
            onClick={save}
            loading={saving}
          >
            Lưu thay đổi
          </Button>
        }
      />

      <div className="space-y-6">
        <HeroSection
          data={form}
          onChange={updateField}
        />

        <AboutSection
          data={form}
          onChange={updateField}
        />

        <CounterSection
          data={form}
          onChange={updateField}
        />
      </div>
    </>
  );
}