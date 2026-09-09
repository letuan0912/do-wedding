"use client";

import Card from "@/components/admin/ui/Card";
import Input from "@/components/admin/ui/Input";
import Textarea from "@/components/admin/ui/Textarea";

import { HomePageData } from "../types";

interface Props {
  data: HomePageData;
  onChange: <K extends keyof HomePageData>(
    key: K,
    value: HomePageData[K]
  ) => void;
}

export default function TimelineSection({
  data,
  onChange,
}: Props) {
  const updateStep = (
    index: number,
    field: "number" | "title" | "description",
    value: string
  ) => {
    const updated = [...data.timelineSteps];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    onChange(
      "timelineSteps",
      updated
    );
  };

  return (
    <Card
      title="Timeline"
      description="Quản lý quy trình dịch vụ."
    >
      <div className="space-y-6">
        <Input
          label="Subtitle"
          value={data.timelineSubtitle}
          onChange={(e) =>
            onChange(
              "timelineSubtitle",
              e.target.value
            )
          }
        />

        <Input
          label="Tiêu đề"
          value={data.timelineTitle}
          onChange={(e) =>
            onChange(
              "timelineTitle",
              e.target.value
            )
          }
        />

        {data.timelineSteps.map(
          (step, index) => (
            <div
              key={index}
              className="
                rounded-xl
                border
                border-gray-200
                p-5
                space-y-4
              "
            >
              <h3 className="font-semibold">
                Bước {index + 1}
              </h3>

              <Input
                label="Số"
                value={step.number}
                onChange={(e) =>
                  updateStep(
                    index,
                    "number",
                    e.target.value
                  )
                }
              />

              <Input
                label="Tiêu đề"
                value={step.title}
                onChange={(e) =>
                  updateStep(
                    index,
                    "title",
                    e.target.value
                  )
                }
              />

              <Textarea
                label="Mô tả"
                rows={3}
                value={step.description}
                onChange={(e) =>
                  updateStep(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </div>
          )
        )}
      </div>
    </Card>
  );
}