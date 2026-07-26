"use client";

import { useEffect, useState } from "react";
import { PackagePlus, Package } from "lucide-react";

import FormCard from "@/components/admin/ui/FormCard";
import Button from "@/components/admin/ui/Button";
import Loading from "@/components/admin/ui/Loading";
import EmptyState from "@/components/admin/ui/EmptyState";

type PackageItem = {
  _id: string;
  title: string;
  price: number;
  salePrice?: number;
  published: boolean;
};

type Props = {
  serviceId?: string;

  onManagePackage?: () => void;
};

const money = (value: number) =>
  new Intl.NumberFormat("vi-VN").format(value);

export default function PackagePreviewSection({
  serviceId,
  onManagePackage,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [packages, setPackages] =
    useState<PackageItem[]>([]);

  useEffect(() => {
    if (!serviceId) return;

    loadPackages();
  }, [serviceId]);

  const loadPackages = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `/api/admin/package?serviceId=${serviceId}`
      );

      const result =
        await res.json();

      if (res.ok) {
        setPackages(
          result.data ?? []
        );
      }
    } finally {
      setLoading(false);
    }
  };

  if (!serviceId) {
    return (
      <FormCard title="Gói dịch vụ">
        <EmptyState
          title="Chưa có gói dịch vụ"
          description="Bạn cần lưu dịch vụ trước để thêm gói dịch vụ."
        />
      </FormCard>
    );
  }

  return (
    <FormCard title="Gói dịch vụ">
      <div className="space-y-4">

        {loading && <Loading />}

        {!loading &&
          packages.length === 0 && (
            <EmptyState
              title="Chưa có gói dịch vụ"
              description="Hãy tạo gói đầu tiên cho dịch vụ này."
            />
          )}

        {!loading &&
          packages.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <div>
                <div className="font-medium">
                  {item.title}
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  {item.salePrice
                    ? (
                        <>
                          <span className="font-semibold text-red-600">
                            {money(
                              item.salePrice
                            )}
                            đ
                          </span>

                          <span className="ml-2 line-through">
                            {money(
                              item.price
                            )}
                            đ
                          </span>
                        </>
                      )
                    : (
                        <>
                          {money(
                            item.price
                          )}
                          đ
                        </>
                      )}
                </div>
              </div>

              <Package
                className="text-gray-400"
                size={22}
              />
            </div>
          ))}

        <div className="pt-2">
          <Button
            className="w-full"
            variant="outline"
            onClick={
              onManagePackage
            }
          >
            <PackagePlus
              size={18}
            />

            Quản lý gói dịch vụ
          </Button>
        </div>

      </div>
    </FormCard>
  );
}