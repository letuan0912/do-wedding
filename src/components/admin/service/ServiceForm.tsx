"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";

import BasicInfoSection from "./sections/BasicInfoSection";
import ImageSeoSection from "./sections/ImageSeoSection";
import SettingSection from "./sections/SettingSection";

import GallerySection from "./sections/GallerySection";
import IncludesSection from "./sections/IncludesSection";

import type { Service } from "@/types/service";

type Props = {
  service?: Service | null;
  onClose: () => void;
  onSuccess: () => void;
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function ServiceForm({
  service,
  onClose,
  onSuccess,
}: Props) {
  const isEdit = !!service?._id;

  const [loading, setLoading] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [subtitle, setSubtitle] = useState("");

const [price, setPrice] = useState("");

const [story, setStory] = useState("");

  const [
    shortDescription,
    setShortDescription,
  ] = useState("");

  const [content, setContent] =
    useState("");

  const [thumbnail, setThumbnail] =
    useState("");

  const [cover, setCover] = useState("");

const [gallery, setGallery] = useState<string[]>([]);

const [includes, setIncludes] = useState<string[]>([]);

  const [banner, setBanner] =
    useState("");

  const [
    mobileBanner,
    setMobileBanner,
  ] = useState("");

  const [icon, setIcon] =
    useState("");

  const [seoTitle, setSeoTitle] =
    useState("");

  const [
    seoDescription,
    setSeoDescription,
  ] = useState("");

  const [
    seoKeywords,
    setSeoKeywords,
  ] = useState<string[]>([]);

  const [featured, setFeatured] =
    useState(false);

  const [published, setPublished] =
    useState(true);

  const [sortOrder, setSortOrder] =
    useState(0);

  useEffect(() => {
    if (!service) return;

    setTitle(service.title);
    setSlug(service.slug);

    setSubtitle(service.subtitle ?? "");

setPrice(service.price ?? "");

setStory(service.story ?? "");

    setShortDescription(
      service.shortDescription
    );

    setContent(service.content);

    setThumbnail(service.thumbnail);

    setCover(service.cover ?? "");

setGallery(service.gallery ?? []);

setIncludes(service.includes ?? []);

    setBanner(service.banner);

    setMobileBanner(
      service.mobileBanner
    );

    setIcon(service.icon);

    setSeoTitle(service.seoTitle);

    setSeoDescription(
      service.seoDescription
    );

    setSeoKeywords(
      service.seoKeywords ?? []
    );

    setFeatured(service.featured);

    setPublished(service.published);

    setSortOrder(service.sortOrder);
  }, [service]);

  useEffect(() => {
    if (!isEdit) {
      setSlug(slugify(title));
    }
  }, [title, isEdit]);
    const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setSaving(true);

      const body = {
        subtitle,

price,

story,
        title,
        slug,
        shortDescription,
        content,

        thumbnail,
        cover,

gallery,

includes,
        banner,
        mobileBanner,
        icon,

        seoTitle,
        seoDescription,
        seoKeywords,

        featured,
        published,
        sortOrder,
      };

      const res = await fetch(
        isEdit
          ? `/api/admin/service/${service!._id}`
          : "/api/admin/service",
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data =
        await res.json();

      if (!res.ok || !data.success) {
        toast.error(
          data.message ??
            "Lưu dịch vụ thất bại"
        );
        return;
      }

      toast.success(
        isEdit
          ? "Cập nhật dịch vụ thành công"
          : "Thêm dịch vụ thành công"
      );

      onSuccess();

      onClose();
    } catch (error) {
      console.error(error);

      toast.error(
        "Có lỗi xảy ra"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        Đang tải...
      </div>
    );
  }

return (
  <form
    onSubmit={handleSubmit}
    className="flex h-full flex-col"
  >
    {/* Nội dung */}
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-12 gap-8">
        {/* Cột trái */}
        <div className="col-span-8">
          <BasicInfoSection
  title={title}
  setTitle={setTitle}

  slug={slug}
  setSlug={setSlug}

  subtitle={subtitle}
  setSubtitle={setSubtitle}

  price={price}
  setPrice={setPrice}

  shortDescription={shortDescription}
  setShortDescription={setShortDescription}

  story={story}
  setStory={setStory}

  content={content}
  setContent={setContent}
/>
        </div>

        {/* Cột phải */}
        <div className="col-span-4 space-y-8">
          <ImageSeoSection
  thumbnail={thumbnail}
  setThumbnail={setThumbnail}

  cover={cover}
  setCover={setCover}

  banner={banner}
  setBanner={setBanner}

  mobileBanner={mobileBanner}
  setMobileBanner={setMobileBanner}

  icon={icon}
  setIcon={setIcon}

  seoTitle={seoTitle}
  setSeoTitle={setSeoTitle}

  seoDescription={seoDescription}
  setSeoDescription={setSeoDescription}

  seoKeywords={seoKeywords}
  setSeoKeywords={setSeoKeywords}
/>

          <GallerySection
  gallery={gallery}
  setGallery={setGallery}
/>

<IncludesSection
  includes={includes}
  setIncludes={setIncludes}
/>

          <SettingSection
            featured={featured}
            setFeatured={setFeatured}
            published={published}
            setPublished={setPublished}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="border-t bg-white pt-6 flex justify-end gap-4">
      <Button
        type="button"
        variant="secondary"
        onClick={onClose}
      >
        Hủy
      </Button>

      <Button
        type="submit"
        loading={saving}
      >
        {isEdit ? "Cập nhật" : "Thêm dịch vụ"}
      </Button>
    </div>
  </form>
);
}