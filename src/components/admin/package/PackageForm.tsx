"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";

import BasicInfoSection from "./sections/BasicInfoSection";
import PricingSection from "./sections/PricingSection";
import FeatureSection from "./sections/FeatureSection";
import SettingSection from "./sections/SettingSection";

import type { Package } from "@/types/package";
import type { Service } from "@/types/service";

type Props = {
  packageItem?: Package | null;
  onSuccess: () => void;
};

const generateSlug = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

export default function PackageForm({
  packageItem,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [services, setServices] = useState<Service[]>([]);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);

  const [serviceId, setServiceId] = useState("");
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [deposit, setDeposit] = useState("");

  const [badge, setBadge] = useState("");

  const [duration, setDuration] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const [features, setFeatures] = useState<string[]>([""]);

  const [featured, setFeatured] = useState(false);

  const [published, setPublished] = useState(true);

  const [sortOrder, setSortOrder] = useState(0);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await fetch("/api/admin/service");

        const data = await res.json();

        setServices(data.data ?? []);
      } catch (err) {
        console.error(err);
      }
    };

    loadServices();
  }, []);

  useEffect(() => {
    if (!packageItem) {
      setSlugEdited(false);
      return;
    }

    setTitle(packageItem.title);

    setSlug(packageItem.slug);
    setSlugEdited(false);

    setServiceId(
      typeof packageItem.serviceId === "string"
        ? packageItem.serviceId
        : packageItem.serviceId._id
    );

    setDescription(packageItem.description);

    setPrice(String(packageItem.price));

    setSalePrice(
      packageItem.salePrice
        ? String(packageItem.salePrice)
        : ""
    );

    setDeposit(
      packageItem.deposit
        ? String(packageItem.deposit)
        : ""
    );

    setBadge(packageItem.badge ?? "");

    setDuration(packageItem.duration ?? "");

    setDeliveryTime(packageItem.deliveryTime ?? "");

    setFeatures(
      packageItem.features.length
        ? packageItem.features
        : [""]
    );

    setFeatured(packageItem.featured);

    setPublished(packageItem.published);

    setSortOrder(packageItem.sortOrder);
  }, [packageItem]);

  useEffect(() => {
    if (slugEdited) return;

    setSlug(generateSlug(title));
  }, [title, slugEdited]);

  const addFeature = () => {
    setFeatures((prev) => [...prev, ""]);
  };

  const removeFeature = (index: number) => {
    if (features.length === 1) {
      setFeatures([""]);
      return;
    }

    setFeatures((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const updateFeature = (
    index: number,
    value: string
  ) => {
    setFeatures((prev) =>
      prev.map((item, i) =>
        i === index ? value : item
      )
    );
  };

  const serviceOptions = services.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Vui lòng nhập tên gói.");
      return;
    }

    if (!serviceId) {
      toast.error("Vui lòng chọn dịch vụ.");
      return;
    }

    if (!price) {
      toast.error("Vui lòng nhập giá.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        serviceId,
        description: description.trim(),

        price: Number(price),

        salePrice: salePrice
          ? Number(salePrice)
          : undefined,

        deposit: deposit
          ? Number(deposit)
          : undefined,

        badge: badge.trim(),

        duration: duration.trim(),

        deliveryTime: deliveryTime.trim(),

        features: features
          .map((item) => item.trim())
          .filter(Boolean),

        featured,
        published,
        sortOrder,
      };

      const url = packageItem
        ? `/api/admin/package/${packageItem._id}`
        : "/api/admin/package";

      const method = packageItem ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.message ?? "Có lỗi xảy ra."
        );
      }

      toast.success(
        packageItem
          ? "Cập nhật gói dịch vụ thành công."
          : "Thêm gói dịch vụ thành công."
      );

      onSuccess();
    } catch (error: any) {
      toast.error(
        error.message ?? "Có lỗi xảy ra."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
  <form
    onSubmit={handleSubmit}
    className="space-y-6"
  >
    <BasicInfoSection
      title={title}
      setTitle={setTitle}
      slug={slug}
      setSlug={(value) => {
        setSlug(value);
        setSlugEdited(true);
      }}
      serviceId={serviceId}
      setServiceId={setServiceId}
      badge={badge}
      setBadge={setBadge}
      description={description}
      setDescription={setDescription}
      serviceOptions={serviceOptions}
    />

    <PricingSection
      price={price}
      setPrice={setPrice}
      salePrice={salePrice}
      setSalePrice={setSalePrice}
      deposit={deposit}
      setDeposit={setDeposit}
      duration={duration}
      setDuration={setDuration}
      deliveryTime={deliveryTime}
      setDeliveryTime={setDeliveryTime}
    />

    <FeatureSection
      features={features}
      addFeature={addFeature}
      removeFeature={removeFeature}
      updateFeature={updateFeature}
    />

    <SettingSection
      published={published}
      setPublished={setPublished}
      featured={featured}
      setFeatured={setFeatured}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
    />

    <div className="flex justify-end gap-3 border-t pt-6">
      <Button
        type="submit"
        loading={loading}
      >
        {packageItem
          ? "Cập nhật gói"
          : "Thêm gói"}
      </Button>
    </div>
  </form>
);
}