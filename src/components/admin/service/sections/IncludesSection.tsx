"use client";

import FormCard from "@/components/admin/ui/FormCard";
import Input from "@/components/admin/ui/Input";
import Button from "@/components/admin/ui/Button";

type Props = {
  includes: string[];
  setIncludes: (value: string[]) => void;
};

export default function IncludesSection({
  includes,
  setIncludes,
}: Props) {
  const updateItem = (
    index: number,
    value: string
  ) => {
    const next = [...includes];
    next[index] = value;
    setIncludes(next);
  };

  const addItem = () => {
    setIncludes([...includes, ""]);
  };

  const removeItem = (
    index: number
  ) => {
    setIncludes(
      includes.filter((_, i) => i !== index)
    );
  };

  return (
    <FormCard title="Dịch vụ bao gồm">
      <div className="space-y-4">
        {includes.map((item, index) => (
          <div
            key={index}
            className="flex gap-3"
          >
            <Input
              value={item}
              placeholder="Ví dụ: Makeup cao cấp"
              onChange={(e) =>
                updateItem(
                  index,
                  e.target.value
                )
              }
            />

            <Button
              type="button"
              variant="danger"
              onClick={() =>
                removeItem(index)
              }
            >
              Xóa
            </Button>
          </div>
        ))}

        <Button
          type="button"
          onClick={addItem}
        >
          + Thêm mục
        </Button>
      </div>
    </FormCard>
  );
}