"use client";

import Button from "@/components/admin/ui/Button";
import FormCard from "@/components/admin/ui/FormCard";
import Input from "@/components/admin/ui/Input";

type Props = {
  features: string[];

  addFeature: () => void;

  removeFeature: (index: number) => void;

  updateFeature: (
    index: number,
    value: string
  ) => void;
};

export default function FeatureSection({
  features,
  addFeature,
  removeFeature,
  updateFeature,
}: Props) {
  return (
    <FormCard title="Quyền lợi gói dịch vụ">
      <div className="space-y-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <Input
              className="flex-1"
              placeholder={`Quyền lợi ${
                index + 1
              }`}
              value={item}
              onChange={(e) =>
                updateFeature(
                  index,
                  e.target.value
                )
              }
            />

            <Button
              type="button"
              variant="destructive"
              onClick={() =>
                removeFeature(index)
              }
            >
              Xóa
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addFeature}
        >
          + Thêm quyền lợi
        </Button>
      </div>
    </FormCard>
  );
}