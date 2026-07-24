"use client";

import Input from "@/components/admin/ui/Input";
import Select, {
  SelectOption,
} from "@/components/admin/ui/Select";
import Textarea from "@/components/admin/ui/Textarea";
import FormCard from "@/components/admin/ui/FormCard";

type Props = {
  title: string;
  setTitle: (v: string) => void;

  slug: string;
  setSlug: (v: string) => void;

  serviceId: string;
  setServiceId: (v: string) => void;

  badge: string;
  setBadge: (v: string) => void;

  description: string;
  setDescription: (v: string) => void;

  serviceOptions: SelectOption[];
};

export default function BasicInfoSection({
  title,
  setTitle,

  slug,
  setSlug,

  serviceId,
  setServiceId,

  badge,
  setBadge,

  description,
  setDescription,

  serviceOptions,
}: Props) {
  return (
    <FormCard title="Thông tin cơ bản">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Tên gói"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <Input
            label="Slug"
            value={slug}
            onChange={(e) =>
              setSlug(e.target.value)
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Select
            label="Dịch vụ"
            value={serviceId}
            options={serviceOptions}
            onChange={(e) =>
              setServiceId(e.target.value)
            }
          />

          <Input
            label="Badge"
            value={badge}
            onChange={(e) =>
              setBadge(e.target.value)
            }
          />
        </div>

        <Textarea
          label="Mô tả"
          rows={5}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />
      </div>
    </FormCard>
  );
}